import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

interface FeaturedArticleProps {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

const FeaturedArticle = ({ title, description, date, author, image, slug }: FeaturedArticleProps) => {
  return (
    <Link to={`/post/${slug}`} className="block w-full">
      <article className="group cursor-pointer overflow-hidden rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all duration-300 card-glow">
        <div className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <span className="inline-block section-header text-[10px] py-1 px-3 mb-3">
              Em destaque
            </span>
            
            <h2 className="font-display font-bold text-xl md:text-3xl mb-2 line-clamp-3 md:line-clamp-2 text-white drop-shadow-lg">
              {title}
            </h2>
            
            <p className="text-white/90 text-sm mb-4 line-clamp-2 max-w-lg drop-shadow-md">
              {description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-4 text-xs text-white/80">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  {author}
                </span>
              </div>
              
              <span className="flex items-center gap-1 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Ler mais
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedArticle;
