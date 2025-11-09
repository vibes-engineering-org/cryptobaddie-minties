import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjEwNDQ1MTQsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg2QzA4NTBmRjVhYzdEYjI4ZkU2NTMzRUYzNTgxMTlEZEFCN0VFZTQ1In0",
      payload: "eyJkb21haW4iOiJjcnlwdG9iYWRkaWUtbWludGllcy52ZXJjZWwuYXBwIn0",
      signature:
        "wv1MdRau/K3eOtVEIb4hlWlAyC33+6yVwKtsCRsIH4IFa+Zopki5mrH+LfQpqBfNBFrYV5XoN/WDeBsgoHCg1hw=",
    },
    miniapp: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      ogImageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
