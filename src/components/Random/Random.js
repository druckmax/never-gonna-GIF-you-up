import React from "react";
import './random.scss'

export default function Random() {

    const data = [{
      "type": "gif",
      "id": "fSAIyfEgJbnFU8yA7B",
      "url": "https://giphy.com/gifs/randoms-rowntrees-rowntreesrandoms-fSAIyfEgJbnFU8yA7B",
      "slug": "randoms-rowntrees-rowntreesrandoms-fSAIyfEgJbnFU8yA7B",
      "bitly_gif_url": "https://gph.is/g/ZnKLLrK",
      "bitly_url": "https://gph.is/g/ZnKLLrK",
      "embed_url": "https://giphy.com/embed/fSAIyfEgJbnFU8yA7B",
      "username": "ROWNTREES_UKI",
      "source": "",
      "title": "",
      "rating": "g",
      "content_url": "",
      "source_tld": "",
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2020-03-12 10:37:27",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
        "downsized_small": {
          "height": "480",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy-downsized-small.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy-downsized-small.mp4&ct=g",
          "mp4_size": "170645",
          "width": "480"
        },
        "hd": {
          "height": "1920",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy-hd.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy-hd.mp4&ct=g",
          "mp4_size": "1110100",
          "width": "1920"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "size": "15353",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200_d.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200_d.gif&ct=g",
          "webp": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200_d.webp?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200_d.webp&ct=g",
          "webp_size": "10180",
          "width": "200"
        },
        "fixed_width_still": {
          "height": "200",
          "size": "3362",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200w_s.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200w_s.gif&ct=g",
          "width": "200"
        },
        "preview_gif": {
          "height": "204",
          "size": "49308",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy-preview.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy-preview.gif&ct=g",
          "width": "204"
        },
        "preview": {
          "height": "480",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy-preview.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy-preview.mp4&ct=g",
          "mp4_size": "18289",
          "width": "480"
        },
        "fixed_height_small": {
          "height": "100",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/100.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=100.mp4&ct=g",
          "mp4_size": "29377",
          "size": "111894",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/100.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=100.gif&ct=g",
          "webp": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/100.webp?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=100.webp&ct=g",
          "webp_size": "100652",
          "width": "100"
        },
        "downsized": {
          "height": "480",
          "size": "1471390",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy.gif&ct=g",
          "width": "480"
        },
        "fixed_width_downsampled": {
          "height": "200",
          "size": "15353",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200w_d.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200w_d.gif&ct=g",
          "webp": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200w_d.webp?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200w_d.webp&ct=g",
          "webp_size": "10180",
          "width": "200"
        },
        "fixed_width": {
          "height": "200",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200w.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200w.mp4&ct=g",
          "mp4_size": "62072",
          "size": "293753",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200w.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200w.gif&ct=g",
          "webp": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200w.webp?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200w.webp&ct=g",
          "webp_size": "212458",
          "width": "200"
        },
        "downsized_still": {
          "height": "480",
          "size": "1471390",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy_s.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy_s.gif&ct=g",
          "width": "480"
        },
        "downsized_medium": {
          "height": "480",
          "size": "1471390",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy.gif&ct=g",
          "width": "480"
        },
        "original_mp4": {
          "height": "480",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy.mp4&ct=g",
          "mp4_size": "170645",
          "width": "480"
        },
        "downsized_large": {
          "height": "480",
          "size": "1471390",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy.gif&ct=g",
          "width": "480"
        },
        "preview_webp": {
          "height": "480",
          "size": "39248",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy-preview.webp?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy-preview.webp&ct=g",
          "width": "480"
        },
        "original": {
          "frames": "150",
          "hash": "5db0efc81626a5a9bd70f86f566717ac",
          "height": "480",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy.mp4&ct=g",
          "mp4_size": "170645",
          "size": "1471390",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy.gif&ct=g",
          "webp": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy.webp?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy.webp&ct=g",
          "webp_size": "527798",
          "width": "480"
        },
        "original_still": {
          "height": "480",
          "size": "13192",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy_s.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy_s.gif&ct=g",
          "width": "480"
        },
        "fixed_height_small_still": {
          "height": "100",
          "size": "1777",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/100_s.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=100_s.gif&ct=g",
          "width": "100"
        },
        "fixed_width_small": {
          "height": "100",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/100w.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=100w.mp4&ct=g",
          "mp4_size": "29377",
          "size": "111894",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/100w.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=100w.gif&ct=g",
          "webp": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/100w.webp?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=100w.webp&ct=g",
          "webp_size": "100652",
          "width": "100"
        },
        "looping": {
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy-loop.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy-loop.mp4&ct=g",
          "mp4_size": "241854"
        },
        "4k": {
          "height": "3840",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/giphy-4k.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=giphy-4k.mp4&ct=g",
          "mp4_size": "3291171",
          "width": "3840"
        },
        "fixed_width_small_still": {
          "height": "100",
          "size": "1777",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/100w_s.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=100w_s.gif&ct=g",
          "width": "100"
        },
        "fixed_height_still": {
          "height": "200",
          "size": "3362",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200_s.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200_s.gif&ct=g",
          "width": "200"
        },
        "fixed_height": {
          "height": "200",
          "mp4": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200.mp4?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200.mp4&ct=g",
          "mp4_size": "62072",
          "size": "293753",
          "url": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200.gif?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200.gif&ct=g",
          "webp": "https://media0.giphy.com/media/fSAIyfEgJbnFU8yA7B/200.webp?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=200.webp&ct=g",
          "webp_size": "212458",
          "width": "200"
        },
        "480w_still": {
          "url": "https://media1.giphy.com/media/fSAIyfEgJbnFU8yA7B/480w_s.jpg?cid=8d04d5d4412c733efcf45b17cd5f2b06faff7151ceb9a304&rid=480w_s.jpg&ct=g",
          "width": "480",
          "height": "480"
        }
      },
      "user": {
        "avatar_url": "https://media0.giphy.com/avatars/ROWNTREES_UKI/qBeskGWlCrlO.jpg",
        "banner_image": "",
        "banner_url": "",
        "profile_url": "https://giphy.com/ROWNTREES_UKI/",
        "username": "ROWNTREES_UKI",
        "display_name": "Rowntree's",
        "description": "Welcome to the Official Rowntree's ® GIPHY page. Tag us if you use any of these on IG using @RowntreesUK ",
        "is_verified": false,
        "website_url": "https://www.nestle.co.uk/en-gb/brands/chocolate_and_confectionery/rowntree",
        "instagram_url": "https://instagram.com/rowntreesuk"
      }
    }]

  return (
    <div className="content-container">
            {data.map(x => {
                return (
                <div className="grid-item-random" key={x.id}> 
                    <img src={x.images.original.url} alt={x.slug} id={x.id} />
                </div>
                )})}  
    </div>
  );
}
