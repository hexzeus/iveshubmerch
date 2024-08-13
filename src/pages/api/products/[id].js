import { printful } from "../../../lib/printful-client";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const { result } = await printful.get(`store/variants/@${id}`);

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    res.status(200).json({
      id: id,
      price: result.retail_price,
      url: `/api/products/${id}`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      errors: [
        {
          key: error?.message,
          message: error?.message,
        },
      ],
    });
  }
}
