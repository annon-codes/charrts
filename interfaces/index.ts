import { MdxRemote } from "next-mdx-remote/types";

export type Chart = {
  title: string
  image: string
  description?: string
  mdx?: MdxRemote.Source
}
