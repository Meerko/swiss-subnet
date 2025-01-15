import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
    title, 
    _createdAt,
    body,
    mainImage,
    link {
          type,
          title,
          url,
          reference->{
            _type,
            title,
            slug
          },
          file {
            asset->{
              url
            }
          }
        }
    }`,
    {
      slug,
    }
  );
}

export async function getHomepage() {
  return await sanityClient.fetch(groq`*[_type == "homepage"][0] {
    heroSection{
      headline,
      subHeadline,
      mainImage{
        asset->{
          url,
          metadata { lqip, dimensions }
        }
      }
    },
    aboutSection {
      title,
      text,
      data[]
    },
    featuresSection {
      title,
      headline,
      cards[] {
        icon{
        asset->{
            url
          }
        },
        title,
        text
      }
    },
    subnetSection {
    title,
    cards[]{
        title,
        text,
        link {
          type,
          title,
          url,
          reference->{
            _type,
            title,
            slug
          },
          file {
            asset->{
              url
            }
          }
        }
      }
    },
    nftSection {
      title,
      headline,
      text,
      ascii{
        asset->{
            url
          }
        },
    },
    newsSection {
      title,
      headline,
      news[]->{
        title,
        excerpt,
        slug,
        publishedAt,
        mainImage{
          asset->{
            url,
            metadata { lqip, dimensions }
          }
        }
      }
    },
    contactSection {
      title,
      headline,
      text,
    }
  }`);
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset & { alt?: string };
  body: PortableTextBlock[];
  link: {
    type: "url" | "reference" | "file";
    url?: string;
    reference?: {
      _type: "page";
      title: string;
      slug: Slug;
    };
    file?: {
      asset: {
        url: string;
      };
    };
  };
}
