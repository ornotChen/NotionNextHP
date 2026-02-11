import { compressImage } from '@/lib/notion/mapImage'
import Link from 'next/link'
import { isMobile } from '@/lib/utils'
import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'

/**
 * 博客文章卡片（点击直接进入正文）
 */
const BlogPost = (props) => {
  const { post, index, siteInfo } = props

  const pageThumbnail = compressImage(
    post?.pageCoverThumbnail || siteInfo?.pageCover
  )

  let delay = index * 100
  if (isMobile()) delay = 0

  return (
    <Link href={post?.href} className="block">
      <article
        data-aos-delay={`${delay}`}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        className="
          cursor-pointer
          relative
          bg-white dark:bg-neutral-900
          rounded-2xl overflow-hidden
          shadow-sm hover:shadow-lg
          transition-all duration-300
          border border-gray-100 dark:border-neutral-800
        "
      >
        {/* 封面 */}
        <LazyImage
          src={pageThumbnail}
          className="
            aspect-[16/9]
            w-full
            object-cover
            filter brightness-[1.10] contrast-[.75] saturate-[.90]
          "
        />

        {/* 标题 */}
        <h2 className="absolute left-0 bottom-0 m-4 text-md text-gray-100 shadow-text">
          {siteConfig('POST_TITLE_ICON') && (
            <NotionIcon icon={post.pageIcon} />
          )}
          {post?.title}
        </h2>

        {/* 分类（不嵌套 Link） */}
        {post?.category && (
          <a
            href={`/category/${post.category}`}
            onClick={(e) => e.stopPropagation()}
            className="
              absolute left-0 top-0 m-4
              text-xs rounded-lg
              px-2 py-1
              bg-gray-200 dark:bg-black dark:bg-opacity-25
              hover:bg-blue-700 hover:text-white
              transition-colors duration-200
            "
          >
            {post.category}
          </a>
        )}
      </article>
    </Link>
  )
}

export default BlogPost
