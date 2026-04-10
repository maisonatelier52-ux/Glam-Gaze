import Image from "next/image";

export default function AuthorBox({ author }) {
  if (!author) return null;

  return (
    <div className="py-8 border-y border-gray-300">

      <div className="flex items-start gap-5">

        {/* AUTHOR IMAGE */}
        <Image
          src={author.photo}
          alt={author.name}
          width={80}
          height={80}
          className="w-20 h-20 object-cover rounded-full"
        />

        {/* AUTHOR DETAILS */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
            Written By
          </p>

          <p className="text-lg font-semibold">
            {author.name}
          </p>

          <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-xl">
            {author.bio}
          </p>
        </div>

      </div>

    </div>
  );
}