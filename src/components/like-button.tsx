"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface LikeButtonProps {
  id: number;
}
export default function LikeButton({ id }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userKey = user?.email
    ? `likedPhotos_${user.email}`
    : "likedPhotos_guest";

  useEffect(() => {
    const likedPhotos = JSON.parse(localStorage.getItem(userKey) || "[]");
    setLiked(likedPhotos.includes(id));
  }, [id, userKey]);

  const handleLike = () => {
    const likedPhotos = JSON.parse(localStorage.getItem(userKey) || "[]");
    let updated;
    if (liked) {
      updated = likedPhotos.filter((photoId: number) => photoId !== id);
    } else {
      updated = [...likedPhotos, id];
    }
    localStorage.setItem(userKey, JSON.stringify(updated));
    setLiked(!liked);
  };

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
