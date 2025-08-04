import { Logo } from "@/components/logo";
import PhotoCard from "@/components/photo-card";
import { Photo } from "@/types/photo";

export default async function Photos() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PEXELS_ENDPOINT}/search?query=nature&per_page=10`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY || "",
        cache: "no-store",
      },
    }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch photos");
  }
  const responseJson = await data.json();

  const photos: Photo[] = responseJson.photos;

  return (
    <div className="w-full max-w-sm mx-auto lg:max-w-md px-4 py-10">
      <div className="flex flex-col mb-8 gap-8 md:mb-12">
        <Logo />
        <h1 className="text-xl font-bold text-primary">All photos</h1>
      </div>
      <div className="flex flex-col gap-2">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
