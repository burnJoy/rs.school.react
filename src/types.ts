export interface Hero {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };

  urls: [{ url: string }];
}
