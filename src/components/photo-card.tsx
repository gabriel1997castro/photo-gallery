import { Photo } from "@/types/photo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LikeButton from "./like-button";

export default function PhotoCard({
  photo,
}: {
  photo: Photo;
  liked?: boolean;
}) {
  return (
    <div key={photo.id} className="flex w-full">
      <div className="flex-shrink-0">
        <LikeButton id={photo.id} />
      </div>
      <div className="min-w-[4.688rem] min-h-[4.688rem] relative">
        <Image
          className="w-[4.688rem] h-[4.688rem] rounded-lg object-cover"
          src={photo.src.medium}
          alt={photo.alt}
          width={75}
          height={75}
        />
      </div>
      <div className="px-4 text-sm max-w-1/2 sm:max-w-2/3 md:max-w-full">
        <p className="font-bold text-primary">{photo.photographer}</p>

        <div className="relative group w-full">
          <span
            className="inline-block truncate align-middle max-w-full text-primary"
            title={photo.alt}
          >
            {photo.alt}
          </span>
          <span className="absolute left-0 z-10 hidden group-hover:block bg-white border border-gray-300 rounded p-2 text-xs shadow-lg w-max max-w-xs">
            {photo.alt}
          </span>
        </div>
        <span className="flex items-center gap-2">
          <span style={{ color: photo.avg_color }}>{photo.avg_color}</span>
          <span
            className="inline-block w-3 h-3"
            style={{ backgroundColor: photo.avg_color }}
            aria-label={`Color swatch for ${photo.avg_color}`}
          />
        </span>
      </div>
      <div className="flex items-start gap-1">
        <Image
          src={"/links.svg"}
          alt="Portfolio link"
          width={12}
          height={12}
          className="inline-block mt-[2px]"
        />
        <Link
          href={photo.photographer_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}
