using API.Entities;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string orderBy)
        {
            if (string.IsNullOrWhiteSpace(orderBy)) return query.OrderBy(p => p.Name);

            query = orderBy switch
            {
                "price" => query.OrderBy(p => p.Price),
                "priceDesc" => query.OrderByDescending(p => p.Price),
                _ => query.OrderBy(p => p.Name)
            };

            return query;
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string searcTerm)
        {
            if (string.IsNullOrWhiteSpace(searcTerm)) return query;

            var lowerCaseSearchTerm = searcTerm.Trim().ToLower();

            return query.Where(p => p.Name.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string brands, string types)
        {
            var brandLIst = new List<string>();
            var typeLIst = new List<string>();

            if (!string.IsNullOrEmpty(brands))
                brandLIst.AddRange(brands.ToLower().Split(",").ToList());

            if (!string.IsNullOrEmpty(types))
                typeLIst.AddRange(types.ToLower().Split(",").ToList());

            query = query.Where(p => brandLIst.Count == 0 || brandLIst.Contains(p.Brand.ToLower()));
            query = query.Where(p => typeLIst.Count == 0 || typeLIst.Contains(p.Type.ToLower()));

            return query;
        }
    }
}