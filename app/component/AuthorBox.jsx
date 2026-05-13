import Image from "next/image";
import Link from "next/link";
import {
  FaReddit,
  FaMedium,
  FaQuora,
  FaPinterest,
} from "react-icons/fa";

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

          <p className="text-lg font-semibold hover:underline">
            <Link href={`/author/${author.slug}`} title={`View ${author.name}`}>
              {author.name}
            </Link>
          </p>

          <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-xl">
            {author.meta_description ||
              author.bio ||
              "Writer at GLAM GAZE covering fashion and culture."}
          </p>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-4 mt-4">

            {author.reddit && (
              <Link
                href={author.reddit}
                target="_blank"
                title={`${author.name} Reddit`}
                rel="noopener noreferrer"
                aria-label={`${author.name} Reddit`}
                className="text-gray-500 hover:text-black transition"
              >
                <FaReddit className="w-5 h-5" />
              </Link>
            )}

            {author.medium && (
              <Link
                href={author.medium}
                target="_blank"
                title={`${author.name} Medium`}
                rel="noopener noreferrer"
                aria-label={`${author.name} Medium`}
                className="text-gray-500 hover:text-black transition"
              >
                <FaMedium className="w-5 h-5" />
              </Link>
            )}

            {author.quora && (
              <Link
                href={author.quora}
                target="_blank"
                title={`${author.name} Quora`}
                rel="noopener noreferrer"
                aria-label={`${author.name} Quora`}
                className="text-gray-500 hover:text-black transition"
              >
                <FaQuora className="w-5 h-5" />
              </Link>
            )}

            {author.pinterest && (
              <Link
                href={author.pinterest}
                target="_blank"
                title={`${author.name} Pinterest`}
                rel="noopener noreferrer"
                aria-label={`${author.name} Pinterest`}
                className="text-gray-500 hover:text-black transition"
              >
                <FaPinterest className="w-5 h-5" />
              </Link>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}