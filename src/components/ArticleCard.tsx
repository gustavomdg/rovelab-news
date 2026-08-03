import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  emoji?: string;
  slug: string;
}

const ArticleCard = ({ title, description, date, image, emoji = "🤖", slug }: ArticleCardProps) => {
  return (
    <Link to={`/post/${slug}`} className="block w-full">
      <article className="group cursor-pointer py-8 px-4 -mx-4 border-b border-border last:border-b-0 rounded-xl card-glow">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center justify-between">
          {/* Content - Left */}
          <div className="flex-1 max-w-xl">
            <h3 className="font-display font-semibold text-xl md:text-2xl text-primary group-hover:text-primary/80 transition-colors mb-2">
              <span className="mr-2">{emoji}</span>
              {title}
            </h3>
            
            <p className="text-muted-foreground text-base mb-3">
              {description}
            </p>

            <span className="text-sm text-primary font-medium">
              {date}
            </span>
          </div>

          {/* Image - Right */}
          <div className="relative overflow-hidden rounded-lg shrink-0 w-full md:w-64 lg:w-72 aspect-video md:aspect-[4/3]">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
