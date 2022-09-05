import React from "react";
import './random.scss'

export default function Random() {

    const data = [{
      "type": "gif",
      "id": "wkSyGueYTnk40",
      "url": "https://giphy.com/gifs/amazing-random-comics-wkSyGueYTnk40",
      "slug": "amazing-random-comics-wkSyGueYTnk40",
      "bitly_gif_url": "http://gph.is/1fgnpaN",
      "bitly_url": "http://gph.is/1fgnpaN",
      "embed_url": "https://giphy.com/embed/wkSyGueYTnk40",
      "username": "",
      "source": "http://sobakodetortuga.tumblr.com/post/68501356526",
      "title": "iron man marvel GIF",
      "rating": "g",
      "content_url": "",
      "source_tld": "sobakodetortuga.tumblr.com",
      "source_post_url": "http://sobakodetortuga.tumblr.com/post/68501356526",
      "is_sticker": 0,
      "import_datetime": "2014-01-09 16:45:40",
      "trending_datetime": "1970-01-01 00:00:00",
      "images": {
        "fixed_width_still": {
          "height": "220",
          "size": "13574",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/200w_s.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200w_s.gif&ct=g",
          "width": "200"
        },
        "preview_gif": {
          "height": "98",
          "size": "48983",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy-preview.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy-preview.gif&ct=g",
          "width": "89"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "size": "59820",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/200_d.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200_d.gif&ct=g",
          "webp": "https://media2.giphy.com/media/wkSyGueYTnk40/200_d.webp?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200_d.webp&ct=g",
          "webp_size": "42256",
          "width": "182"
        },
        "preview": {
          "height": "150",
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy-preview.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy-preview.mp4&ct=g",
          "mp4_size": "41296",
          "width": "136"
        },
        "fixed_height_small": {
          "height": "100",
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/100.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=100.mp4&ct=g",
          "mp4_size": "40436",
          "size": "91792",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/100.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=100.gif&ct=g",
          "webp": "https://media2.giphy.com/media/wkSyGueYTnk40/100.webp?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=100.webp&ct=g",
          "webp_size": "58014",
          "width": "91"
        },
        "downsized": {
          "height": "550",
          "size": "938056",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy.gif&ct=g",
          "width": "500"
        },
        "fixed_width_downsampled": {
          "height": "220",
          "size": "72168",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/200w_d.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200w_d.gif&ct=g",
          "webp": "https://media2.giphy.com/media/wkSyGueYTnk40/200w_d.webp?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200w_d.webp&ct=g",
          "webp_size": "50792",
          "width": "200"
        },
        "fixed_width": {
          "height": "220",
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/200w.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200w.mp4&ct=g",
          "mp4_size": "192803",
          "size": "368697",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/200w.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200w.gif&ct=g",
          "webp": "https://media2.giphy.com/media/wkSyGueYTnk40/200w.webp?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200w.webp&ct=g",
          "webp_size": "246012",
          "width": "200"
        },
        "downsized_still": {
          "height": "550",
          "size": "938056",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy_s.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy_s.gif&ct=g",
          "width": "500"
        },
        "downsized_medium": {
          "height": "550",
          "size": "938056",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy.gif&ct=g",
          "width": "500"
        },
        "original_mp4": {
          "height": "528",
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy.mp4&ct=g",
          "mp4_size": "1055911",
          "width": "480"
        },
        "downsized_large": {
          "height": "550",
          "size": "938056",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy.gif&ct=g",
          "width": "500"
        },
        "preview_webp": {
          "height": "122",
          "size": "27962",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy-preview.webp?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy-preview.webp&ct=g",
          "width": "110"
        },
        "original": {
          "frames": "34",
          "hash": "443494c1152de9cae9d9060409646ac6",
          "height": "550",
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy.mp4&ct=g",
          "mp4_size": "1055911",
          "size": "938056",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy.gif&ct=g",
          "webp": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy.webp?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy.webp&ct=g",
          "webp_size": "1283386",
          "width": "500"
        },
        "original_still": {
          "height": "550",
          "size": "32162",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy_s.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy_s.gif&ct=g",
          "width": "500"
        },
        "fixed_height_small_still": {
          "height": "100",
          "size": "3703",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/100_s.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=100_s.gif&ct=g",
          "width": "91"
        },
        "fixed_width_small": {
          "height": "110",
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/100w.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=100w.mp4&ct=g",
          "mp4_size": "47894",
          "size": "109387",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/100w.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=100w.gif&ct=g",
          "webp": "https://media2.giphy.com/media/wkSyGueYTnk40/100w.webp?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=100w.webp&ct=g",
          "webp_size": "69042",
          "width": "100"
        },
        "looping": {
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy-loop.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy-loop.mp4&ct=g",
          "mp4_size": "5268027"
        },
        "downsized_small": {
          "height": "220",
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/giphy-downsized-small.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=giphy-downsized-small.mp4&ct=g",
          "mp4_size": "119595",
          "width": "200"
        },
        "fixed_width_small_still": {
          "height": "110",
          "size": "4263",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/100w_s.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=100w_s.gif&ct=g",
          "width": "100"
        },
        "fixed_height_still": {
          "height": "200",
          "size": "10838",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/200_s.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200_s.gif&ct=g",
          "width": "182"
        },
        "fixed_height": {
          "height": "200",
          "mp4": "https://media2.giphy.com/media/wkSyGueYTnk40/200.mp4?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200.mp4&ct=g",
          "mp4_size": "161307",
          "size": "307614",
          "url": "https://media2.giphy.com/media/wkSyGueYTnk40/200.gif?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200.gif&ct=g",
          "webp": "https://media2.giphy.com/media/wkSyGueYTnk40/200.webp?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=200.webp&ct=g",
          "webp_size": "207110",
          "width": "182"
        },
        "480w_still": {
          "url": "https://media3.giphy.com/media/wkSyGueYTnk40/480w_s.jpg?cid=8d04d5d44fee584a4a657df6ebd7690403d5f9674e6ea1c4&rid=480w_s.jpg&ct=g",
          "width": "480",
          "height": "528"
        }
      }
    }]

  return (
    <div className="content-container">
        <div className="grid-container">
            {data.map(x => {
                return (
                <div className="grid-item-random" key={x.id}> 
                    <img src={x.images.original.url} alt={x.slug} id={x.id} />
                </div>
                )})}
        </div>   
    </div>
  );
}
