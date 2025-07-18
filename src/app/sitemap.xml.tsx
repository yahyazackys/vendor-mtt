import { GetServerSideProps } from "next";
import { format } from "date-fns";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "<https://mitratourpartner.my.id>";
  const today = format(new Date(), "yyyy-MM-dd");

  const staticPages = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/products`,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="<http://www.sitemaps.org/schemas/sitemap/0.9>">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${today}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
