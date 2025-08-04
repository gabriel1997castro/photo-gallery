"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface LikeButtonProps {
  id: number;
}

export default function LikeButton({ id }: LikeButtonProps) {
  const [liked, setLiked] = useState<boolean | null>(null);

  useEffect(() => {
    // Only run on client
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const key = user?.email ? `likedPhotos_${user.email}` : null;
    if (key) {
      const likedPhotos = JSON.parse(localStorage.getItem(key) || "[]");
      setLiked(likedPhotos.includes(id));
    } else {
      setLiked(false);
    }
  }, [id]);

  const handleLike = useCallback(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const key = user?.email ? `likedPhotos_${user.email}` : null;
    if (!key) return;
    const likedPhotos = JSON.parse(localStorage.getItem(key) || "[]");
    let updated;
    if (liked) {
      updated = likedPhotos.filter((photoId: number) => photoId !== id);
    } else {
      updated = [...likedPhotos, id];
    }
    localStorage.setItem(key, JSON.stringify(updated));
    setLiked(!liked);
  }, [liked, id]);

  // Don't render anything until client knows liked state
  if (liked === null) return null;

  return (
    <button
      type="button"
      className="flex items-start mr-3"
      aria-label={liked ? "Unlike photo" : "Like photo"}
      onClick={handleLike}
    >
      {liked ? (
        <Image
          src="/star-filled.svg"
          alt="Liked photo"
          width={20}
          height={20}
        />
      ) : (
        <Image src="/star.svg" alt="Photo not liked" width={20} height={20} />
      )}
    </button>
  );
}
