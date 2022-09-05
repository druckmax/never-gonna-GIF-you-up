import React from 'react'
import './searchResults.scss'

export default function SearchResults() {

    const data= [
      {
        "type": "gif",
        "id": "13BwjdpxACoBPO",
        "url": "https://giphy.com/gifs/weird-funny-odd-13BwjdpxACoBPO",
        "slug": "weird-funny-odd-13BwjdpxACoBPO",
        "bitly_gif_url": "http://gph.is/1cMykWu",
        "bitly_url": "http://gph.is/1cMykWu",
        "embed_url": "https://giphy.com/embed/13BwjdpxACoBPO",
        "username": "",
        "source": "http://muver54.tumblr.com/post/31736762456/its-weird-but-odd-but-funny-but-weird-but",
        "title": "weird GIF",
        "rating": "pg-13",
        "content_url": "",
        "source_tld": "muver54.tumblr.com",
        "source_post_url": "http://muver54.tumblr.com/post/31736762456/its-weird-but-odd-but-funny-but-weird-but",
        "is_sticker": 0,
        "import_datetime": "2014-01-03 07:13:07",
        "trending_datetime": "1970-01-01 00:00:00",
        "images": {
          "original": {
            "height": "141",
            "width": "250",
            "size": "263497",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "142050",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "66542",
            "webp": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "14",
            "hash": "9eafa19284f726944b5da9d651d55059"
          },
          "downsized": {
            "height": "141",
            "width": "250",
            "size": "263497",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "141",
            "width": "250",
            "size": "263497",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "141",
            "width": "250",
            "size": "263497",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "140",
            "width": "250",
            "mp4_size": "47967",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "141",
            "width": "250",
            "size": "263497",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "355",
            "size": "319650",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "68886",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "98204",
            "webp": "https://media4.giphy.com/media/13BwjdpxACoBPO/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "355",
            "size": "151661",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "83298",
            "webp": "https://media4.giphy.com/media/13BwjdpxACoBPO/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "178",
            "size": "107949",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "22654",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "34146",
            "webp": "https://media4.giphy.com/media/13BwjdpxACoBPO/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "178",
            "size": "9694",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "355",
            "size": "23563",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "113",
            "width": "200",
            "size": "138154",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "24934",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "39896",
            "webp": "https://media4.giphy.com/media/13BwjdpxACoBPO/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "113",
            "width": "200",
            "size": "59414",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "31028",
            "webp": "https://media4.giphy.com/media/13BwjdpxACoBPO/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "43988",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "10702",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "16216",
            "webp": "https://media4.giphy.com/media/13BwjdpxACoBPO/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "57",
            "width": "100",
            "size": "3956",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "113",
            "width": "200",
            "size": "12608",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1969987",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "141",
            "width": "250",
            "size": "28788",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "270",
            "width": "480",
            "mp4_size": "142050",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "140",
            "width": "250",
            "mp4_size": "47967",
            "mp4": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "53",
            "width": "94",
            "size": "49418",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "130",
            "width": "230",
            "size": "42910",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "271",
            "width": "480",
            "size": "263497",
            "url": "https://media4.giphy.com/media/13BwjdpxACoBPO/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTEzQndqZHB4QUNvQlBPJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEzQndqZHB4QUNvQlBPJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEzQndqZHB4QUNvQlBPJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEzQndqZHB4QUNvQlBPJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3osxYefnq73uPKW2hG",
        "url": "https://giphy.com/gifs/wtf-eyes-potato-3osxYefnq73uPKW2hG",
        "slug": "wtf-eyes-potato-3osxYefnq73uPKW2hG",
        "bitly_gif_url": "http://gph.is/1WPuhxn",
        "bitly_url": "http://gph.is/1WPuhxn",
        "embed_url": "https://giphy.com/embed/3osxYefnq73uPKW2hG",
        "username": "justingammon",
        "source": "justingammon.com",
        "title": "Eyes Lol GIF by Justin Gammon",
        "rating": "pg",
        "content_url": "http://blog.dennys.com",
        "source_tld": "",
        "source_post_url": "justingammon.com",
        "is_sticker": 0,
        "import_datetime": "2016-03-26 03:05:07",
        "trending_datetime": "2020-07-05 22:45:07",
        "images": {
          "original": {
            "height": "500",
            "width": "500",
            "size": "1269660",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "168741",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "374890",
            "webp": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "130",
            "hash": "e8c1f1e6af91d93d2b94804842e96534"
          },
          "downsized": {
            "height": "500",
            "width": "500",
            "size": "1269660",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "500",
            "width": "500",
            "size": "1269660",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "500",
            "width": "500",
            "size": "1269660",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "450",
            "width": "450",
            "mp4_size": "73797",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "500",
            "width": "500",
            "size": "1269660",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "229830",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "33780",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "102502",
            "webp": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "24381",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "19280",
            "webp": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "89196",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "15165",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "48860",
            "webp": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "4085",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "13668",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "229830",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "33780",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "102502",
            "webp": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "24381",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "19280",
            "webp": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "89196",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "15165",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "48860",
            "webp": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "4085",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "13668",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "513180",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "500",
            "width": "500",
            "size": "59808",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "168741",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "400",
            "width": "400",
            "mp4_size": "22667",
            "mp4": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "175",
            "width": "175",
            "size": "49172",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "368",
            "width": "368",
            "size": "43528",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "1269660",
            "url": "https://media1.giphy.com/media/3osxYefnq73uPKW2hG/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media0.giphy.com/avatars/justingammon/RlrCzIlo743M.gif",
          "banner_image": "https://media0.giphy.com/headers/justingammon/BPrIs0S52kJ5.gif",
          "banner_url": "https://media0.giphy.com/headers/justingammon/BPrIs0S52kJ5.gif",
          "profile_url": "https://giphy.com/justingammon/",
          "username": "justingammon",
          "display_name": "Justin Gammon",
          "description": "I'm an illustrator & designer with a penchant for the weird. Currently making GIFs for brands, but also napping here and there.",
          "instagram_url": "https://instagram.com/justingammon",
          "website_url": "http://justingammon.com/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNvc3hZZWZucTczdVBLVzJoRyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvc3hZZWZucTczdVBLVzJoRyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvc3hZZWZucTczdVBLVzJoRyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvc3hZZWZucTczdVBLVzJoRyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "5xtDarobRW68tNCgjUA",
        "url": "https://giphy.com/gifs/jasonclarke-pink-weird-fart-5xtDarobRW68tNCgjUA",
        "slug": "jasonclarke-pink-weird-fart-5xtDarobRW68tNCgjUA",
        "bitly_gif_url": "",
        "bitly_url": "",
        "embed_url": "https://giphy.com/embed/5xtDarobRW68tNCgjUA",
        "username": "jasonclarke",
        "source": "http://jasonclarke.tumblr.com",
        "title": "Pink Farting GIF by Jason Clarke",
        "rating": "pg",
        "content_url": "",
        "source_tld": "jasonclarke.tumblr.com",
        "source_post_url": "http://jasonclarke.tumblr.com",
        "is_sticker": 0,
        "import_datetime": "2014-07-16 04:14:30",
        "trending_datetime": "2016-03-22 06:15:01",
        "images": {
          "original": {
            "height": "500",
            "width": "500",
            "size": "103365",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "108450",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "143674",
            "webp": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "15",
            "hash": "3e6723c00609551d91b1b6ed50b72910"
          },
          "downsized": {
            "height": "500",
            "width": "500",
            "size": "103365",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "500",
            "width": "500",
            "size": "103365",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "500",
            "width": "500",
            "size": "103365",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "500",
            "width": "500",
            "mp4_size": "114666",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "500",
            "width": "500",
            "size": "103365",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "43874",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "36495",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "48016",
            "webp": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "19652",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "19744",
            "webp": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "18515",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "14093",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "18918",
            "webp": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "1961",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "3516",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "43874",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "36495",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "48016",
            "webp": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "19652",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "19744",
            "webp": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "18515",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "14093",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "18918",
            "webp": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "1961",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "3516",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1163122",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "500",
            "width": "500",
            "size": "7505",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "108450",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "330",
            "width": "330",
            "mp4_size": "45772",
            "mp4": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "185",
            "width": "185",
            "size": "48641",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "268",
            "width": "268",
            "size": "48664",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "103365",
            "url": "https://media1.giphy.com/media/5xtDarobRW68tNCgjUA/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media4.giphy.com/avatars/jasonclarke/EMvEbngDXuzV.gif",
          "banner_image": "https://media4.giphy.com/channel_assets/jasonclarke/6ezyDGEudL1D.gif",
          "banner_url": "https://media4.giphy.com/channel_assets/jasonclarke/6ezyDGEudL1D.gif",
          "profile_url": "https://giphy.com/jasonclarke/",
          "username": "jasonclarke",
          "display_name": "Jason Clarke",
          "description": "Trying to have a good time",
          "instagram_url": "https://instagram.com/bucketofbrains",
          "website_url": "http://www.instagram.com/bucketofbrains",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPTV4dERhcm9iUlc2OHROQ2dqVUEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV4dERhcm9iUlc2OHROQ2dqVUEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV4dERhcm9iUlc2OHROQ2dqVUEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV4dERhcm9iUlc2OHROQ2dqVUEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "l3V0x6kdXUW9M4ONq",
        "url": "https://giphy.com/gifs/dinosaur-jurassic-park-chicken-nugget-l3V0x6kdXUW9M4ONq",
        "slug": "dinosaur-jurassic-park-chicken-nugget-l3V0x6kdXUW9M4ONq",
        "bitly_gif_url": "http://gph.is/23Tlkur",
        "bitly_url": "http://gph.is/23Tlkur",
        "embed_url": "https://giphy.com/embed/l3V0x6kdXUW9M4ONq",
        "username": "justingammon",
        "source": "justingammon.com",
        "title": "chicken nugget wtf GIF by Justin Gammon",
        "rating": "g",
        "content_url": "http://blog.dennys.com",
        "source_tld": "",
        "source_post_url": "justingammon.com",
        "is_sticker": 0,
        "import_datetime": "2016-04-24 23:23:50",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "500",
            "width": "500",
            "size": "761748",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "130902",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "211968",
            "webp": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "16",
            "hash": "72b12d436c40ba6a0e19fcea4f5007b5"
          },
          "downsized": {
            "height": "500",
            "width": "500",
            "size": "761748",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "500",
            "width": "500",
            "size": "761748",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "500",
            "width": "500",
            "size": "761748",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "500",
            "width": "500",
            "mp4_size": "169414",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "500",
            "width": "500",
            "size": "761748",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "192228",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "28091",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "47522",
            "webp": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "86274",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "40282",
            "webp": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "46273",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "10153",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "17924",
            "webp": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "4347",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "10902",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "192228",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "28091",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "47522",
            "webp": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "86274",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "40282",
            "webp": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "46273",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "10153",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "17924",
            "webp": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "4347",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "10902",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2470544",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "500",
            "width": "500",
            "size": "98701",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "130902",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "270",
            "width": "270",
            "mp4_size": "22920",
            "mp4": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "107",
            "width": "107",
            "size": "48934",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "226",
            "width": "226",
            "size": "41534",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "761748",
            "url": "https://media1.giphy.com/media/l3V0x6kdXUW9M4ONq/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media2.giphy.com/avatars/justingammon/RlrCzIlo743M.gif",
          "banner_image": "https://media2.giphy.com/headers/justingammon/BPrIs0S52kJ5.gif",
          "banner_url": "https://media2.giphy.com/headers/justingammon/BPrIs0S52kJ5.gif",
          "profile_url": "https://giphy.com/justingammon/",
          "username": "justingammon",
          "display_name": "Justin Gammon",
          "description": "I'm an illustrator & designer with a penchant for the weird. Currently making GIFs for brands, but also napping here and there.",
          "instagram_url": "https://instagram.com/justingammon",
          "website_url": "http://justingammon.com/",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPWwzVjB4NmtkWFVXOU00T05xJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwzVjB4NmtkWFVXOU00T05xJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwzVjB4NmtkWFVXOU00T05xJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwzVjB4NmtkWFVXOU00T05xJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "l46Cuu0O6xJ42z66I",
        "url": "https://giphy.com/gifs/eyes-squeeze-l46Cuu0O6xJ42z66I",
        "slug": "eyes-squeeze-l46Cuu0O6xJ42z66I",
        "bitly_gif_url": "http://gph.is/1UpPkYu",
        "bitly_url": "http://gph.is/1UpPkYu",
        "embed_url": "https://giphy.com/embed/l46Cuu0O6xJ42z66I",
        "username": "elmotionlab",
        "source": "elm0.tv",
        "title": "weird squeeze GIF by ELMØ",
        "rating": "pg-13",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "elm0.tv",
        "is_sticker": 0,
        "import_datetime": "2016-06-13 10:52:47",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "400",
            "width": "400",
            "size": "488783",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "242362",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "147720",
            "webp": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "14",
            "hash": "4dd28102b1551da91784160023cfe7c5"
          },
          "downsized": {
            "height": "400",
            "width": "400",
            "size": "488783",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "400",
            "width": "400",
            "size": "488783",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "400",
            "width": "400",
            "size": "488783",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "400",
            "width": "400",
            "mp4_size": "187124",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "400",
            "width": "400",
            "size": "488783",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "95339",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "21454",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "26634",
            "webp": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "45433",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "32440",
            "webp": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "33595",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "7877",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "8536",
            "webp": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "3103",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "7084",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "95339",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "21454",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "26634",
            "webp": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "45433",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "32440",
            "webp": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "33595",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "7877",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "8536",
            "webp": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "3103",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "7084",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "4421868",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "400",
            "width": "400",
            "size": "67328",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "242362",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "206",
            "width": "206",
            "mp4_size": "9981",
            "mp4": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "96",
            "width": "96",
            "size": "45937",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "226",
            "width": "226",
            "size": "25922",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "488783",
            "url": "https://media3.giphy.com/media/l46Cuu0O6xJ42z66I/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media4.giphy.com/avatars/elmotionlab/YUd2oRRuYJac.gif",
          "banner_image": "https://media4.giphy.com/headers/elmotionlab/4p3Wy9u2TgdE.jpg",
          "banner_url": "https://media4.giphy.com/headers/elmotionlab/4p3Wy9u2TgdE.jpg",
          "profile_url": "https://giphy.com/elmotionlab/",
          "username": "elmotionlab",
          "display_name": "ELMØ",
          "description": "ELMØ is a small creative studio in Paris. Productions & drafts. Useless machines. Loops. Shenanigans. Tutti Frutti...",
          "instagram_url": "https://instagram.com/elmotionlab",
          "website_url": "http://elm0.tv",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPWw0NkN1dTBPNnhKNDJ6NjZJJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw0NkN1dTBPNnhKNDJ6NjZJJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw0NkN1dTBPNnhKNDJ6NjZJJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw0NkN1dTBPNnhKNDJ6NjZJJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "vbD9OoDgUOpkk",
        "url": "https://giphy.com/gifs/cat-weird-teeth-vbD9OoDgUOpkk",
        "slug": "cat-weird-teeth-vbD9OoDgUOpkk",
        "bitly_gif_url": "http://gph.is/1sFJ6tj",
        "bitly_url": "http://gph.is/1sFJ6tj",
        "embed_url": "https://giphy.com/embed/vbD9OoDgUOpkk",
        "username": "",
        "source": "http://blog.sirmitchell.com/post/7113938621/my-dreams-they-are-now-haunted",
        "title": "Cat Teeth GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "blog.sirmitchell.com",
        "source_post_url": "http://blog.sirmitchell.com/post/7113938621/my-dreams-they-are-now-haunted",
        "is_sticker": 0,
        "import_datetime": "2016-06-15 03:57:46",
        "trending_datetime": "2020-03-21 00:30:04",
        "images": {
          "original": {
            "height": "300",
            "width": "400",
            "size": "193888",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "67906",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "83954",
            "webp": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "16",
            "hash": "ec66d74942f90a399e5cd4941f104ff1"
          },
          "downsized": {
            "height": "300",
            "width": "400",
            "size": "193888",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "300",
            "width": "400",
            "size": "193888",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "300",
            "width": "400",
            "size": "193888",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "300",
            "width": "400",
            "mp4_size": "55979",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "300",
            "width": "400",
            "size": "193888",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "97539",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "20608",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "44202",
            "webp": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "57156",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "40268",
            "webp": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "37482",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "7763",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "16522",
            "webp": "https://media4.giphy.com/media/vbD9OoDgUOpkk/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "7796",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "19981",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "64061",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "13394",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "30032",
            "webp": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "32010",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "26618",
            "webp": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "23131",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "5616",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "11306",
            "webp": "https://media4.giphy.com/media/vbD9OoDgUOpkk/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "4882",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "16847",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "974399",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "300",
            "width": "400",
            "size": "61875",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "67906",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "270",
            "width": "360",
            "mp4_size": "20006",
            "mp4": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "134",
            "width": "179",
            "size": "49932",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "270",
            "width": "360",
            "size": "45110",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "193888",
            "url": "https://media4.giphy.com/media/vbD9OoDgUOpkk/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPXZiRDlPb0RnVU9wa2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXZiRDlPb0RnVU9wa2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXZiRDlPb0RnVU9wa2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXZiRDlPb0RnVU9wa2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "89Eko49m84Ja",
        "url": "https://giphy.com/gifs/games-flight-react-89Eko49m84Ja",
        "slug": "games-flight-react-89Eko49m84Ja",
        "bitly_gif_url": "http://gph.is/2fjvbnv",
        "bitly_url": "http://gph.is/2fjvbnv",
        "embed_url": "https://giphy.com/embed/89Eko49m84Ja",
        "username": "",
        "source": "https://www1.flightrising.com/forums/forga/993750/243",
        "title": "Mask GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "www1.flightrising.com",
        "source_post_url": "https://www1.flightrising.com/forums/forga/993750/243",
        "is_sticker": 0,
        "import_datetime": "2016-11-03 19:02:57",
        "trending_datetime": "2017-06-27 09:30:01",
        "images": {
          "original": {
            "height": "300",
            "width": "400",
            "size": "2048146",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "274042",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "581182",
            "webp": "https://media1.giphy.com/media/89Eko49m84Ja/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "49",
            "hash": "2b253b5d6d0b7291222d1d9f8f3a97c8"
          },
          "downsized": {
            "height": "187",
            "width": "250",
            "size": "802684",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "300",
            "width": "400",
            "size": "2048146",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "300",
            "width": "400",
            "size": "2048146",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "270",
            "width": "360",
            "mp4_size": "170200",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "187",
            "width": "250",
            "size": "12460",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "910696",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "98362",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "289104",
            "webp": "https://media1.giphy.com/media/89Eko49m84Ja/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "111542",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "35036",
            "webp": "https://media1.giphy.com/media/89Eko49m84Ja/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "271481",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "37956",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "102504",
            "webp": "https://media1.giphy.com/media/89Eko49m84Ja/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "4208",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "14012",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "560591",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "67523",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "189786",
            "webp": "https://media1.giphy.com/media/89Eko49m84Ja/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "68792",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "23270",
            "webp": "https://media1.giphy.com/media/89Eko49m84Ja/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "171793",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "25454",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "67946",
            "webp": "https://media1.giphy.com/media/89Eko49m84Ja/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "2594",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "8516",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1433850",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "300",
            "width": "400",
            "size": "32131",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "274042",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "174",
            "width": "232",
            "mp4_size": "43930",
            "mp4": "https://media1.giphy.com/media/89Eko49m84Ja/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "101",
            "width": "135",
            "size": "48115",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "193",
            "width": "257",
            "size": "49696",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "2048146",
            "url": "https://media1.giphy.com/media/89Eko49m84Ja/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTg5RWtvNDltODRKYSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTg5RWtvNDltODRKYSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTg5RWtvNDltODRKYSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTg5RWtvNDltODRKYSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "AEsUINFBsRVN6",
        "url": "https://giphy.com/gifs/girl-weird-jump-AEsUINFBsRVN6",
        "slug": "girl-weird-jump-AEsUINFBsRVN6",
        "bitly_gif_url": "http://gph.is/1syyUT7",
        "bitly_url": "http://gph.is/1syyUT7",
        "embed_url": "https://giphy.com/embed/AEsUINFBsRVN6",
        "username": "",
        "source": "http://ruinedchildhood.com/post/94063849774/gaskarthskitten-darkbluetile-how-does-she-do",
        "title": "Girl Jump GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "ruinedchildhood.com",
        "source_post_url": "http://ruinedchildhood.com/post/94063849774/gaskarthskitten-darkbluetile-how-does-she-do",
        "is_sticker": 0,
        "import_datetime": "2016-06-10 14:16:01",
        "trending_datetime": "2016-06-10 14:16:09",
        "images": {
          "original": {
            "height": "259",
            "width": "300",
            "size": "1914117",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "2654668",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "1551736",
            "webp": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "97",
            "hash": "c735319020e2f4b15f7a45a0c4422b9a"
          },
          "downsized": {
            "height": "259",
            "width": "300",
            "size": "1914117",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "259",
            "width": "300",
            "size": "1914117",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "259",
            "width": "300",
            "size": "1914117",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "128",
            "width": "148",
            "mp4_size": "68414",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "259",
            "width": "300",
            "size": "1914117",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "232",
            "size": "1510237",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "456056",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "729768",
            "webp": "https://media4.giphy.com/media/AEsUINFBsRVN6/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "232",
            "size": "111031",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "70286",
            "webp": "https://media4.giphy.com/media/AEsUINFBsRVN6/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "116",
            "size": "423338",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "94249",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "185138",
            "webp": "https://media4.giphy.com/media/AEsUINFBsRVN6/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "116",
            "size": "6084",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "232",
            "size": "21851",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "173",
            "width": "200",
            "size": "1107077",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "301887",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "506532",
            "webp": "https://media4.giphy.com/media/AEsUINFBsRVN6/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "173",
            "width": "200",
            "size": "83203",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "52246",
            "webp": "https://media4.giphy.com/media/AEsUINFBsRVN6/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "87",
            "width": "100",
            "size": "337178",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "48615",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "149860",
            "webp": "https://media4.giphy.com/media/AEsUINFBsRVN6/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "87",
            "width": "100",
            "size": "5142",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "173",
            "width": "200",
            "size": "17697",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "4762010",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "259",
            "width": "300",
            "size": "29216",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "414",
            "width": "480",
            "mp4_size": "2654668",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "146",
            "width": "169",
            "mp4_size": "37019",
            "mp4": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "73",
            "width": "85",
            "size": "47033",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "96",
            "width": "112",
            "size": "25592",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "414",
            "width": "480",
            "size": "1914117",
            "url": "https://media4.giphy.com/media/AEsUINFBsRVN6/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPUFFc1VJTkZCc1JWTjYmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFFc1VJTkZCc1JWTjYmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFFc1VJTkZCc1JWTjYmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFFc1VJTkZCc1JWTjYmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "IcifS1qG3YFlS",
        "url": "https://giphy.com/gifs/sure-err-IcifS1qG3YFlS",
        "slug": "sure-err-IcifS1qG3YFlS",
        "bitly_gif_url": "http://gph.is/1jEmOk3",
        "bitly_url": "http://gph.is/1jEmOk3",
        "embed_url": "https://giphy.com/embed/IcifS1qG3YFlS",
        "username": "",
        "source": "http://www.gifbay.com/gif/err_sure_why_not-132038/",
        "title": "Toilet Err GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "www.gifbay.com",
        "source_post_url": "http://www.gifbay.com/gif/err_sure_why_not-132038/",
        "is_sticker": 0,
        "import_datetime": "2014-05-13 20:27:58",
        "trending_datetime": "2014-08-02 19:18:34",
        "images": {
          "original": {
            "height": "350",
            "width": "395",
            "size": "1048105",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "1197595",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "1324656",
            "webp": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "75",
            "hash": "f689aa28007a0622f6e460531a189e75"
          },
          "downsized": {
            "height": "350",
            "width": "395",
            "size": "1048105",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "350",
            "width": "395",
            "size": "1048105",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "350",
            "width": "395",
            "size": "1048105",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "160",
            "width": "180",
            "mp4_size": "58969",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "350",
            "width": "395",
            "size": "1048105",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "226",
            "size": "739202",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "197654",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "394022",
            "webp": "https://media0.giphy.com/media/IcifS1qG3YFlS/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "226",
            "size": "96825",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "60098",
            "webp": "https://media0.giphy.com/media/IcifS1qG3YFlS/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "113",
            "size": "283339",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "58900",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "146390",
            "webp": "https://media0.giphy.com/media/IcifS1qG3YFlS/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "113",
            "size": "6151",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "226",
            "size": "16431",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "177",
            "width": "200",
            "size": "605639",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "146608",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "331024",
            "webp": "https://media0.giphy.com/media/IcifS1qG3YFlS/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "177",
            "width": "200",
            "size": "78476",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "47536",
            "webp": "https://media0.giphy.com/media/IcifS1qG3YFlS/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "89",
            "width": "100",
            "size": "237032",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "46643",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "132844",
            "webp": "https://media0.giphy.com/media/IcifS1qG3YFlS/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "89",
            "width": "100",
            "size": "5271",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "177",
            "width": "200",
            "size": "15504",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2120505",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "350",
            "width": "395",
            "size": "43777",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "424",
            "width": "480",
            "mp4_size": "1197595",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "222",
            "width": "249",
            "mp4_size": "36702",
            "mp4": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "94",
            "width": "106",
            "size": "48476",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "164",
            "width": "186",
            "size": "32814",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "425",
            "width": "480",
            "size": "1048105",
            "url": "https://media0.giphy.com/media/IcifS1qG3YFlS/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPUljaWZTMXFHM1lGbFMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUljaWZTMXFHM1lGbFMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUljaWZTMXFHM1lGbFMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUljaWZTMXFHM1lGbFMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "Lh2r8trojXG7e",
        "url": "https://giphy.com/gifs/oldspice-eurotraining-terrycrew-Lh2r8trojXG7e",
        "slug": "oldspice-eurotraining-terrycrew-Lh2r8trojXG7e",
        "bitly_gif_url": "http://gph.is/2foW4rs",
        "bitly_url": "http://gph.is/2foW4rs",
        "embed_url": "https://giphy.com/embed/Lh2r8trojXG7e",
        "username": "",
        "source": "",
        "title": "Cat Wtf GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2016-11-22 23:12:49",
        "trending_datetime": "2016-12-16 15:15:01",
        "images": {
          "original": {
            "height": "278",
            "width": "498",
            "size": "325587",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "12814",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "75744",
            "webp": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "6",
            "hash": "46c1e93b9d7bacfee7792f9dfedecfac"
          },
          "downsized": {
            "height": "278",
            "width": "498",
            "size": "325587",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "278",
            "width": "498",
            "size": "325587",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "278",
            "width": "498",
            "size": "325587",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "278",
            "width": "498",
            "mp4_size": "16111",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "278",
            "width": "498",
            "size": "325587",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "358",
            "size": "157332",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "9255",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "37528",
            "webp": "https://media0.giphy.com/media/Lh2r8trojXG7e/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "358",
            "size": "157332",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "37528",
            "webp": "https://media0.giphy.com/media/Lh2r8trojXG7e/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "179",
            "size": "45446",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "4755",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "14528",
            "webp": "https://media0.giphy.com/media/Lh2r8trojXG7e/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "179",
            "size": "7088",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "358",
            "size": "22570",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "112",
            "width": "200",
            "size": "52686",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "5010",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "16170",
            "webp": "https://media0.giphy.com/media/Lh2r8trojXG7e/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "112",
            "width": "200",
            "size": "52686",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "16170",
            "webp": "https://media0.giphy.com/media/Lh2r8trojXG7e/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "56",
            "width": "100",
            "size": "18427",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "3075",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "6754",
            "webp": "https://media0.giphy.com/media/Lh2r8trojXG7e/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "56",
            "width": "100",
            "size": "3151",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "112",
            "width": "200",
            "size": "8245",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "646564",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "278",
            "width": "498",
            "size": "41646",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "266",
            "width": "480",
            "mp4_size": "12814",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "278",
            "width": "498",
            "mp4_size": "16111",
            "mp4": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "163",
            "width": "292",
            "size": "47736",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "278",
            "width": "498",
            "size": "33446",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "268",
            "width": "480",
            "size": "325587",
            "url": "https://media0.giphy.com/media/Lh2r8trojXG7e/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPUxoMnI4dHJvalhHN2UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxoMnI4dHJvalhHN2UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxoMnI4dHJvalhHN2UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUxoMnI4dHJvalhHN2UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "MXLOctGsM4ppUjev31",
        "url": "https://giphy.com/gifs/lucifernetflix-lucifer-netflix-MXLOctGsM4ppUjev31",
        "slug": "lucifernetflix-lucifer-netflix-MXLOctGsM4ppUjev31",
        "bitly_gif_url": "https://gph.is/g/ajV9Q9G",
        "bitly_url": "https://gph.is/g/ajV9Q9G",
        "embed_url": "https://giphy.com/embed/MXLOctGsM4ppUjev31",
        "username": "lucifernetflix",
        "source": "",
        "title": "What Happened Something GIF by Lucifer",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "",
        "is_sticker": 0,
        "import_datetime": "2020-08-20 16:52:38",
        "trending_datetime": "2020-08-23 02:30:05",
        "images": {
          "original": {
            "height": "500",
            "width": "500",
            "size": "4955430",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "2650247",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "2814978",
            "webp": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "83",
            "hash": "3efcd4fa6ca3dff36a378596ec5bda0b"
          },
          "downsized": {
            "height": "250",
            "width": "250",
            "size": "1062862",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "500",
            "width": "500",
            "size": "4955430",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "500",
            "width": "500",
            "size": "4955430",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "200",
            "width": "200",
            "mp4_size": "42106",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "250",
            "width": "250",
            "size": "18971",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "1161811",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "103686",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "275140",
            "webp": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "98260",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "54282",
            "webp": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "376257",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "36257",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "100404",
            "webp": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "5456",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "15029",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "1161811",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "103686",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "275140",
            "webp": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "98260",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "54282",
            "webp": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "376257",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "36257",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "100404",
            "webp": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "5456",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "15029",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "6488007",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "500",
            "width": "500",
            "size": "61602",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "480",
            "width": "480",
            "mp4_size": "2650247",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "150",
            "width": "150",
            "mp4_size": "33194",
            "mp4": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "76",
            "width": "76",
            "size": "48691",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "96",
            "width": "96",
            "size": "18666",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "4955430",
            "url": "https://media2.giphy.com/media/MXLOctGsM4ppUjev31/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media3.giphy.com/avatars/lucifernetflix/WhhvDrq88m8s.jpeg",
          "banner_image": "https://media3.giphy.com/headers/lucifernetflix/nLKFml57VdTN.jpeg",
          "banner_url": "https://media3.giphy.com/headers/lucifernetflix/nLKFml57VdTN.jpeg",
          "profile_url": "https://giphy.com/lucifernetflix/",
          "username": "lucifernetflix",
          "display_name": "Lucifer",
          "description": "Raising hell one last time ",
          "instagram_url": "https://instagram.com/lucifernetflix",
          "website_url": "https://netflix.com/lucifer",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPU1YTE9jdEdzTTRwcFVqZXYzMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU1YTE9jdEdzTTRwcFVqZXYzMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU1YTE9jdEdzTTRwcFVqZXYzMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU1YTE9jdEdzTTRwcFVqZXYzMSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "l2YOAnQkBIoGyCSac",
        "url": "https://giphy.com/gifs/head-dolly-parton-l2YOAnQkBIoGyCSac",
        "slug": "head-dolly-parton-l2YOAnQkBIoGyCSac",
        "bitly_gif_url": "http://gph.is/1M3jVsQ",
        "bitly_url": "http://gph.is/1M3jVsQ",
        "embed_url": "https://giphy.com/embed/l2YOAnQkBIoGyCSac",
        "username": "anthonyantonellis",
        "source": "http://antonell.is",
        "title": "weird i see you GIF by Anthony Antonellis",
        "rating": "g",
        "content_url": "",
        "source_tld": "antonell.is",
        "source_post_url": "http://antonell.is",
        "is_sticker": 0,
        "import_datetime": "2016-03-14 23:12:32",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "355",
            "width": "497",
            "size": "3541453",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "499331",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "755876",
            "webp": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "78",
            "hash": "29c54abef6e42c002649e0c4586308c8"
          },
          "downsized": {
            "height": "355",
            "width": "497",
            "size": "1580390",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "355",
            "width": "497",
            "size": "3541453",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "355",
            "width": "497",
            "size": "3541453",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "218",
            "width": "305",
            "mp4_size": "52534",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "355",
            "width": "497",
            "size": "39556",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "280",
            "size": "866987",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "89136",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "197290",
            "webp": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "280",
            "size": "110122",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "68108",
            "webp": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "140",
            "size": "301105",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "28149",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "66090",
            "webp": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "140",
            "size": "6199",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "280",
            "size": "16366",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "143",
            "width": "200",
            "size": "585248",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "48816",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "112412",
            "webp": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "143",
            "width": "200",
            "size": "89142",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "39018",
            "webp": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "72",
            "width": "100",
            "size": "173657",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "16725",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "41246",
            "webp": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "72",
            "width": "100",
            "size": "4064",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "143",
            "width": "200",
            "size": "14371",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1951408",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "355",
            "width": "497",
            "size": "75634",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "342",
            "width": "480",
            "mp4_size": "499331",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "218",
            "width": "305",
            "mp4_size": "32823",
            "mp4": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "71",
            "width": "99",
            "size": "49421",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "122",
            "width": "170",
            "size": "24916",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "343",
            "width": "480",
            "size": "3541453",
            "url": "https://media4.giphy.com/media/l2YOAnQkBIoGyCSac/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "user": {
          "avatar_url": "https://media3.giphy.com/avatars/anthonyantonellis/daQLolrwWo4o.gif",
          "banner_image": "https://media3.giphy.com/headers/anthonyantonellis/SqsFmi8lZMtI.gif",
          "banner_url": "https://media3.giphy.com/headers/anthonyantonellis/SqsFmi8lZMtI.gif",
          "profile_url": "https://giphy.com/anthonyantonellis/",
          "username": "anthonyantonellis",
          "display_name": "Anthony Antonellis",
          "description": "Art, the internet and everything.",
          "instagram_url": "https://instagram.com/anthonyantonellis",
          "website_url": "http://anthonyantonellis.com",
          "is_verified": true
        },
        "analytics_response_payload": "e=Z2lmX2lkPWwyWU9BblFrQklvR3lDU2FjJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwyWU9BblFrQklvR3lDU2FjJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwyWU9BblFrQklvR3lDU2FjJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWwyWU9BblFrQklvR3lDU2FjJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "RE5iREBNhI0Ok",
        "url": "https://giphy.com/gifs/weird-RE5iREBNhI0Ok",
        "slug": "weird-RE5iREBNhI0Ok",
        "bitly_gif_url": "http://gph.is/1jFIsmD",
        "bitly_url": "http://gph.is/1jFIsmD",
        "embed_url": "https://giphy.com/embed/RE5iREBNhI0Ok",
        "username": "",
        "source": "http://www.peoplefunny.com/weird-keyboard-axolotl-5/",
        "title": "Keyboard Axolotl GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.peoplefunny.com",
        "source_post_url": "http://www.peoplefunny.com/weird-keyboard-axolotl-5/",
        "is_sticker": 0,
        "import_datetime": "2013-12-09 23:05:38",
        "trending_datetime": "2019-07-13 06:15:01",
        "images": {
          "original": {
            "height": "300",
            "width": "400",
            "size": "203220",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "121105",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "119564",
            "webp": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "8",
            "hash": "2d65f8e214af5fca636c7d0439807b42"
          },
          "downsized": {
            "height": "300",
            "width": "400",
            "size": "203220",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "300",
            "width": "400",
            "size": "203220",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "300",
            "width": "400",
            "size": "203220",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "300",
            "width": "400",
            "mp4_size": "99475",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "300",
            "width": "400",
            "size": "203220",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "101995",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "37363",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "62662",
            "webp": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "89318",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "77454",
            "webp": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "37385",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "13356",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "28038",
            "webp": "https://media4.giphy.com/media/RE5iREBNhI0Ok/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "10820",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "31071",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "61852",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "24107",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "45298",
            "webp": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "52662",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "47128",
            "webp": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "22236",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "9002",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "19618",
            "webp": "https://media4.giphy.com/media/RE5iREBNhI0Ok/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "6217",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "18827",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1801446",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "300",
            "width": "400",
            "size": "90431",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "121105",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "210",
            "width": "280",
            "mp4_size": "26635",
            "mp4": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "117",
            "width": "156",
            "size": "48337",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "158",
            "width": "210",
            "size": "47240",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "203220",
            "url": "https://media4.giphy.com/media/RE5iREBNhI0Ok/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVJFNWlSRUJOaEkwT2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVJFNWlSRUJOaEkwT2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVJFNWlSRUJOaEkwT2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVJFNWlSRUJOaEkwT2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "d8WjGORtSEWqc",
        "url": "https://giphy.com/gifs/burrito-weird-d8WjGORtSEWqc",
        "slug": "burrito-weird-d8WjGORtSEWqc",
        "bitly_gif_url": "http://gph.is/1baItZm",
        "bitly_url": "http://gph.is/1baItZm",
        "embed_url": "https://giphy.com/embed/d8WjGORtSEWqc",
        "username": "",
        "source": "http://www.reddit.com/r/gifs/comments/1wk5v7/take_this_burrito_my_child/",
        "title": "Child Take GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/gifs/comments/1wk5v7/take_this_burrito_my_child/",
        "is_sticker": 0,
        "import_datetime": "2014-01-30 19:17:19",
        "trending_datetime": "2017-07-20 07:15:01",
        "images": {
          "original": {
            "height": "255",
            "width": "350",
            "size": "3563930",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "705047",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "626048",
            "webp": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "111",
            "hash": "c6f424fce49685289def016057fa3f94"
          },
          "downsized": {
            "height": "255",
            "width": "350",
            "size": "1557259",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "255",
            "width": "350",
            "size": "3563930",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "255",
            "width": "350",
            "size": "3563930",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "174",
            "width": "239",
            "mp4_size": "105496",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "255",
            "width": "350",
            "size": "34552",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "275",
            "size": "1847258",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "255644",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "454520",
            "webp": "https://media1.giphy.com/media/d8WjGORtSEWqc/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "275",
            "size": "120093",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "74450",
            "webp": "https://media1.giphy.com/media/d8WjGORtSEWqc/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "138",
            "size": "615266",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "94535",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "191404",
            "webp": "https://media1.giphy.com/media/d8WjGORtSEWqc/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "138",
            "size": "7156",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "275",
            "size": "19526",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "146",
            "width": "200",
            "size": "1237063",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "163425",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "305798",
            "webp": "https://media1.giphy.com/media/d8WjGORtSEWqc/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "146",
            "width": "200",
            "size": "80137",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "45510",
            "webp": "https://media1.giphy.com/media/d8WjGORtSEWqc/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "73",
            "width": "100",
            "size": "368210",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "49050",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "126196",
            "webp": "https://media1.giphy.com/media/d8WjGORtSEWqc/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "73",
            "width": "100",
            "size": "4630",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "146",
            "width": "200",
            "size": "15249",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2030969",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "255",
            "width": "350",
            "size": "48069",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "348",
            "width": "480",
            "mp4_size": "705047",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "200",
            "width": "275",
            "mp4_size": "38281",
            "mp4": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "70",
            "width": "96",
            "size": "47457",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "150",
            "width": "206",
            "size": "49854",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "350",
            "width": "480",
            "size": "3563930",
            "url": "https://media1.giphy.com/media/d8WjGORtSEWqc/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPWQ4V2pHT1J0U0VXcWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWQ4V2pHT1J0U0VXcWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWQ4V2pHT1J0U0VXcWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWQ4V2pHT1J0U0VXcWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "85p0dpfRvPnfa",
        "url": "https://giphy.com/gifs/wut-happyhappyjoyjoyhappyhappy-85p0dpfRvPnfa",
        "slug": "wut-happyhappyjoyjoyhappyhappy-85p0dpfRvPnfa",
        "bitly_gif_url": "http://gph.is/1wyqsjc",
        "bitly_url": "http://gph.is/1wyqsjc",
        "embed_url": "https://giphy.com/embed/85p0dpfRvPnfa",
        "username": "",
        "source": "http://icarly.wikia.com/wiki/File:Wut.gif",
        "title": "justin bieber dancing GIF",
        "rating": "pg-13",
        "content_url": "",
        "source_tld": "icarly.wikia.com",
        "source_post_url": "http://icarly.wikia.com/wiki/File:Wut.gif",
        "is_sticker": 0,
        "import_datetime": "2014-09-20 04:04:53",
        "trending_datetime": "1970-01-01 00:00:00",
        "images": {
          "original": {
            "height": "288",
            "width": "248",
            "size": "169125",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "151409",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "98990",
            "webp": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "13",
            "hash": "5f942e24a78cd1c00f9c1b946f634c74"
          },
          "downsized": {
            "height": "288",
            "width": "248",
            "size": "169125",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "288",
            "width": "248",
            "size": "169125",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "288",
            "width": "248",
            "size": "169125",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "288",
            "width": "248",
            "mp4_size": "59605",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "288",
            "width": "248",
            "size": "169125",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "172",
            "size": "82462",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "29705",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "56740",
            "webp": "https://media1.giphy.com/media/85p0dpfRvPnfa/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "172",
            "size": "46440",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "33974",
            "webp": "https://media1.giphy.com/media/85p0dpfRvPnfa/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "86",
            "size": "29207",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "11051",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "22074",
            "webp": "https://media1.giphy.com/media/85p0dpfRvPnfa/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "86",
            "size": "4858",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "172",
            "size": "13902",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "232",
            "width": "200",
            "size": "106120",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "36461",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "68968",
            "webp": "https://media1.giphy.com/media/85p0dpfRvPnfa/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "232",
            "width": "200",
            "size": "62216",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "44224",
            "webp": "https://media1.giphy.com/media/85p0dpfRvPnfa/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "116",
            "width": "100",
            "size": "36573",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "13501",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "27988",
            "webp": "https://media1.giphy.com/media/85p0dpfRvPnfa/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "116",
            "width": "100",
            "size": "5998",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "232",
            "width": "200",
            "size": "17844",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1619928",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "288",
            "width": "248",
            "size": "34961",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "556",
            "width": "480",
            "mp4_size": "151409",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "258",
            "width": "222",
            "mp4_size": "26557",
            "mp4": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "127",
            "width": "109",
            "size": "48392",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "196",
            "width": "168",
            "size": "47954",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "557",
            "width": "480",
            "size": "169125",
            "url": "https://media1.giphy.com/media/85p0dpfRvPnfa/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTg1cDBkcGZSdlBuZmEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTg1cDBkcGZSdlBuZmEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTg1cDBkcGZSdlBuZmEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTg1cDBkcGZSdlBuZmEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "p4xp4BjHIdane",
        "url": "https://giphy.com/gifs/cat-weird-bra-p4xp4BjHIdane",
        "slug": "cat-weird-bra-p4xp4BjHIdane",
        "bitly_gif_url": "http://gph.is/12Si8vm",
        "bitly_url": "http://gph.is/12Si8vm",
        "embed_url": "https://giphy.com/embed/p4xp4BjHIdane",
        "username": "",
        "source": "http://www.slapmagazine.com/component/option,com_jfusion/Itemid,4/index.php?topic=69360.0",
        "title": "Cat Bra GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.slapmagazine.com",
        "source_post_url": "http://www.slapmagazine.com/component/option,com_jfusion/Itemid,4/index.php?topic=69360.0",
        "is_sticker": 0,
        "import_datetime": "2013-05-30 19:25:21",
        "trending_datetime": "2017-12-08 03:15:01",
        "images": {
          "original": {
            "height": "175",
            "width": "214",
            "size": "423293",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "326583",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "130214",
            "webp": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "86",
            "hash": "cc3e06d39849ebdff7288303f76d2732"
          },
          "downsized": {
            "height": "175",
            "width": "214",
            "size": "423293",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "175",
            "width": "214",
            "size": "423293",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "175",
            "width": "214",
            "size": "423293",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "174",
            "width": "214",
            "mp4_size": "111147",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "175",
            "width": "214",
            "size": "423293",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "245",
            "size": "525959",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "119382",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "140950",
            "webp": "https://media3.giphy.com/media/p4xp4BjHIdane/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "245",
            "size": "51839",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "28294",
            "webp": "https://media3.giphy.com/media/p4xp4BjHIdane/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "123",
            "size": "196837",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "48757",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "67628",
            "webp": "https://media3.giphy.com/media/p4xp4BjHIdane/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "123",
            "size": "3753",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "245",
            "size": "10726",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "164",
            "width": "200",
            "size": "389592",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "93553",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "115580",
            "webp": "https://media3.giphy.com/media/p4xp4BjHIdane/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "164",
            "width": "200",
            "size": "37179",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "21550",
            "webp": "https://media3.giphy.com/media/p4xp4BjHIdane/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "82",
            "width": "100",
            "size": "146194",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "38799",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "54492",
            "webp": "https://media3.giphy.com/media/p4xp4BjHIdane/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "82",
            "width": "100",
            "size": "2946",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "164",
            "width": "200",
            "size": "6811",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1421993",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "175",
            "width": "214",
            "size": "7952",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "392",
            "width": "480",
            "mp4_size": "326583",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "174",
            "width": "214",
            "mp4_size": "36167",
            "mp4": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "175",
            "width": "214",
            "size": "43701",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "175",
            "width": "214",
            "size": "30584",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "393",
            "width": "480",
            "size": "423293",
            "url": "https://media3.giphy.com/media/p4xp4BjHIdane/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPXA0eHA0QmpISWRhbmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXA0eHA0QmpISWRhbmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXA0eHA0QmpISWRhbmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXA0eHA0QmpISWRhbmUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "ToMjGpkEVV09do6nXMc",
        "url": "https://giphy.com/gifs/weird-ToMjGpkEVV09do6nXMc",
        "slug": "weird-ToMjGpkEVV09do6nXMc",
        "bitly_gif_url": "http://gph.is/1uMnN65",
        "bitly_url": "http://gph.is/1uMnN65",
        "embed_url": "https://giphy.com/embed/ToMjGpkEVV09do6nXMc",
        "username": "",
        "source": "http://forum.bodybuilding.com/showthread.php?t=122653411&page=2",
        "title": "weird exercise GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "forum.bodybuilding.com",
        "source_post_url": "http://forum.bodybuilding.com/showthread.php?t=122653411&page=2",
        "is_sticker": 0,
        "import_datetime": "2014-09-19 20:50:37",
        "trending_datetime": "1970-01-01 00:00:00",
        "images": {
          "original": {
            "height": "231",
            "width": "343",
            "size": "2069685",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "1524773",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "1085978",
            "webp": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "50",
            "hash": "3b26b7658e6ea9c1fa29ed786c31b5da"
          },
          "downsized": {
            "height": "231",
            "width": "343",
            "size": "1474031",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "231",
            "width": "343",
            "size": "2069685",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "231",
            "width": "343",
            "size": "2069685",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "110",
            "width": "163",
            "mp4_size": "90213",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "231",
            "width": "343",
            "size": "30671",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "297",
            "size": "1633421",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "484461",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "769956",
            "webp": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "297",
            "size": "214620",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "111426",
            "webp": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "149",
            "size": "454065",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "137569",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "249548",
            "webp": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "149",
            "size": "10856",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "297",
            "size": "33447",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "135",
            "width": "200",
            "size": "774054",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "228659",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "398298",
            "webp": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "135",
            "width": "200",
            "size": "103078",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "56900",
            "webp": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "68",
            "width": "100",
            "size": "215347",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "48610",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "135662",
            "webp": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "68",
            "width": "100",
            "size": "5482",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "135",
            "width": "200",
            "size": "16212",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "3455525",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "231",
            "width": "343",
            "size": "43994",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "322",
            "width": "480",
            "mp4_size": "1524773",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "130",
            "width": "193",
            "mp4_size": "44284",
            "mp4": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "57",
            "width": "85",
            "size": "49657",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "92",
            "width": "136",
            "size": "33652",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "323",
            "width": "480",
            "size": "2069685",
            "url": "https://media4.giphy.com/media/ToMjGpkEVV09do6nXMc/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVRvTWpHcGtFVlYwOWRvNm5YTWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVRvTWpHcGtFVlYwOWRvNm5YTWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVRvTWpHcGtFVlYwOWRvNm5YTWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVRvTWpHcGtFVlYwOWRvNm5YTWMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "krI1lBPsluByg",
        "url": "https://giphy.com/gifs/door-vacation-krI1lBPsluByg",
        "slug": "door-vacation-krI1lBPsluByg",
        "bitly_gif_url": "http://gph.is/1iwzzrZ",
        "bitly_url": "http://gph.is/1iwzzrZ",
        "embed_url": "https://giphy.com/embed/krI1lBPsluByg",
        "username": "",
        "source": "http://www.reddit.com/r/gifs/comments/22o4l8/first_day_of_vacation_and_i_realized_i_left_the/",
        "title": "John Cena Face GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/gifs/comments/22o4l8/first_day_of_vacation_and_i_realized_i_left_the/",
        "is_sticker": 0,
        "import_datetime": "2014-04-10 05:45:49",
        "trending_datetime": "2017-04-06 12:45:01",
        "images": {
          "original": {
            "height": "187",
            "width": "260",
            "size": "140742",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "161314",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "71038",
            "webp": "https://media2.giphy.com/media/krI1lBPsluByg/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "35",
            "hash": "958047206ad2ab6a6d1c04edf47d22af"
          },
          "downsized": {
            "height": "187",
            "width": "260",
            "size": "140742",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "187",
            "width": "260",
            "size": "140742",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "187",
            "width": "260",
            "size": "140742",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "186",
            "width": "260",
            "mp4_size": "55618",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "187",
            "width": "260",
            "size": "140742",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "278",
            "size": "130528",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "51103",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "68846",
            "webp": "https://media2.giphy.com/media/krI1lBPsluByg/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "278",
            "size": "51862",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "30322",
            "webp": "https://media2.giphy.com/media/krI1lBPsluByg/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "139",
            "size": "43970",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "13503",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "18944",
            "webp": "https://media2.giphy.com/media/krI1lBPsluByg/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "139",
            "size": "8307",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "278",
            "size": "26412",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "144",
            "width": "200",
            "size": "73881",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "25561",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "35216",
            "webp": "https://media2.giphy.com/media/krI1lBPsluByg/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "144",
            "width": "200",
            "size": "27006",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "17262",
            "webp": "https://media2.giphy.com/media/krI1lBPsluByg/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "72",
            "width": "100",
            "size": "27126",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "8897",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "12892",
            "webp": "https://media2.giphy.com/media/krI1lBPsluByg/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "72",
            "width": "100",
            "size": "4657",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "144",
            "width": "200",
            "size": "14895",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "711814",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "187",
            "width": "260",
            "size": "37673",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "344",
            "width": "480",
            "mp4_size": "161314",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "186",
            "width": "260",
            "mp4_size": "26722",
            "mp4": "https://media2.giphy.com/media/krI1lBPsluByg/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "187",
            "width": "260",
            "size": "40500",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "187",
            "width": "260",
            "size": "34182",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "345",
            "width": "480",
            "size": "140742",
            "url": "https://media2.giphy.com/media/krI1lBPsluByg/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPWtySTFsQlBzbHVCeWcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWtySTFsQlBzbHVCeWcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWtySTFsQlBzbHVCeWcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWtySTFsQlBzbHVCeWcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "c1ORoB1FORyqk",
        "url": "https://giphy.com/gifs/weird-wiggle-love-c1ORoB1FORyqk",
        "slug": "weird-wiggle-love-c1ORoB1FORyqk",
        "bitly_gif_url": "http://gph.is/1fscdYK",
        "bitly_url": "http://gph.is/1fscdYK",
        "embed_url": "https://giphy.com/embed/c1ORoB1FORyqk",
        "username": "",
        "source": "http://merrydogemas69.tumblr.com/post/11642206630",
        "title": "Youtube Wiggle GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "merrydogemas69.tumblr.com",
        "source_post_url": "http://merrydogemas69.tumblr.com/post/11642206630",
        "is_sticker": 0,
        "import_datetime": "2014-01-13 19:01:38",
        "trending_datetime": "2016-02-10 14:15:01",
        "images": {
          "original": {
            "height": "250",
            "width": "400",
            "size": "507599",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "264201",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "392370",
            "webp": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "14",
            "hash": "810fafc1c3b29dadc05c4ab346f0e3f9"
          },
          "downsized": {
            "height": "250",
            "width": "400",
            "size": "507599",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "250",
            "width": "400",
            "size": "507599",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "250",
            "width": "400",
            "size": "507599",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "224",
            "width": "358",
            "mp4_size": "59682",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "250",
            "width": "400",
            "size": "507599",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "320",
            "size": "473752",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "96468",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "255374",
            "webp": "https://media0.giphy.com/media/c1ORoB1FORyqk/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "320",
            "size": "240614",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "135344",
            "webp": "https://media0.giphy.com/media/c1ORoB1FORyqk/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "160",
            "size": "140696",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "30573",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "91560",
            "webp": "https://media0.giphy.com/media/c1ORoB1FORyqk/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "160",
            "size": "14025",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "320",
            "size": "40429",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "125",
            "width": "200",
            "size": "197631",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "43888",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "130522",
            "webp": "https://media0.giphy.com/media/c1ORoB1FORyqk/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "125",
            "width": "200",
            "size": "99441",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "64284",
            "webp": "https://media0.giphy.com/media/c1ORoB1FORyqk/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "63",
            "width": "100",
            "size": "58640",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "14908",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "43534",
            "webp": "https://media0.giphy.com/media/c1ORoB1FORyqk/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "63",
            "width": "100",
            "size": "5907",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "125",
            "width": "200",
            "size": "17690",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2967878",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "250",
            "width": "400",
            "size": "53666",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "300",
            "width": "480",
            "mp4_size": "264201",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "116",
            "width": "185",
            "mp4_size": "22807",
            "mp4": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "61",
            "width": "98",
            "size": "48276",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "74",
            "width": "118",
            "size": "42492",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "300",
            "width": "480",
            "size": "507599",
            "url": "https://media0.giphy.com/media/c1ORoB1FORyqk/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPWMxT1JvQjFGT1J5cWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWMxT1JvQjFGT1J5cWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWMxT1JvQjFGT1J5cWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWMxT1JvQjFGT1J5cWsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3o85xsGXVuYh8lM3EQ",
        "url": "https://giphy.com/gifs/dog-head-no-body-3o85xsGXVuYh8lM3EQ",
        "slug": "dog-head-no-body-3o85xsGXVuYh8lM3EQ",
        "bitly_gif_url": "http://gph.is/1KoIwkf",
        "bitly_url": "http://gph.is/1KoIwkf",
        "embed_url": "https://giphy.com/embed/3o85xsGXVuYh8lM3EQ",
        "username": "",
        "source": "google.com",
        "title": "Mash Up Dog GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "google.com",
        "is_sticker": 0,
        "import_datetime": "2015-10-21 19:09:41",
        "trending_datetime": "2017-02-17 16:09:54",
        "images": {
          "original": {
            "height": "146",
            "width": "200",
            "size": "4578427",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "1884452",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "1005870",
            "webp": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "267",
            "hash": "6fa32a0c663da3e7b8d9ad1780baa552"
          },
          "downsized": {
            "height": "146",
            "width": "200",
            "size": "605022",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "146",
            "width": "200",
            "size": "4578427",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "146",
            "width": "200",
            "size": "3289333",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy-downsized-medium.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
            "height": "108",
            "width": "147",
            "mp4_size": "126962",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "146",
            "width": "200",
            "size": "14938",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "274",
            "size": "5286399",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "549960",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "1337410",
            "webp": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "274",
            "size": "130014",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "78798",
            "webp": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "137",
            "size": "1648521",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "226162",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "530580",
            "webp": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "137",
            "size": "7421",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "274",
            "size": "22837",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "146",
            "width": "200",
            "size": "3621745",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "348537",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "1010664",
            "webp": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "146",
            "width": "200",
            "size": "82171",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "47842",
            "webp": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "73",
            "width": "100",
            "size": "1011572",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "45237",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "350202",
            "webp": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "73",
            "width": "100",
            "size": "4576",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "146",
            "width": "200",
            "size": "14824",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1850184",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "146",
            "width": "200",
            "size": "21203",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "350",
            "width": "480",
            "mp4_size": "1884452",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "146",
            "width": "200",
            "mp4_size": "33448",
            "mp4": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "57",
            "width": "78",
            "size": "48703",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "124",
            "width": "170",
            "size": "43964",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "350",
            "width": "480",
            "size": "4578427",
            "url": "https://media3.giphy.com/media/3o85xsGXVuYh8lM3EQ/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNvODV4c0dYVnVZaDhsTTNFUSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvODV4c0dYVnVZaDhsTTNFUSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvODV4c0dYVnVZaDhsTTNFUSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvODV4c0dYVnVZaDhsTTNFUSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "dFWZ6mC5CxIBy",
        "url": "https://giphy.com/gifs/bird-watching-level-dFWZ6mC5CxIBy",
        "slug": "bird-watching-level-dFWZ6mC5CxIBy",
        "bitly_gif_url": "http://gph.is/1Usv1YJ",
        "bitly_url": "http://gph.is/1Usv1YJ",
        "embed_url": "https://giphy.com/embed/dFWZ6mC5CxIBy",
        "username": "",
        "source": "http://www.reddit.com/r/gifs/comments/3g44ct/next_level_bird_watching/",
        "title": "Hat Hummingbird GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/gifs/comments/3g44ct/next_level_bird_watching/",
        "is_sticker": 0,
        "import_datetime": "2015-08-07 10:14:53",
        "trending_datetime": "2017-06-27 01:00:01",
        "images": {
          "original": {
            "height": "205",
            "width": "300",
            "size": "516939",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "497726",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "351548",
            "webp": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "31",
            "hash": "7f6f37e82ed4c990088fedc6e1003280"
          },
          "downsized": {
            "height": "205",
            "width": "300",
            "size": "516939",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "205",
            "width": "300",
            "size": "516939",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "205",
            "width": "300",
            "size": "516939",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "176",
            "width": "258",
            "mp4_size": "41257",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "205",
            "width": "300",
            "size": "516939",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "293",
            "size": "586868",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "151341",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "305476",
            "webp": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "293",
            "size": "128247",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "75742",
            "webp": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "147",
            "size": "170948",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "29100",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "87638",
            "webp": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "147",
            "size": "6343",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "293",
            "size": "19981",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "137",
            "width": "200",
            "size": "326386",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "55970",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "143380",
            "webp": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "137",
            "width": "200",
            "size": "69935",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "39462",
            "webp": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "69",
            "width": "100",
            "size": "89686",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "13578",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "53958",
            "webp": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "69",
            "width": "100",
            "size": "3852",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "137",
            "width": "200",
            "size": "12251",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1679302",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "205",
            "width": "300",
            "size": "23202",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "328",
            "width": "480",
            "mp4_size": "497726",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "162",
            "width": "238",
            "mp4_size": "32784",
            "mp4": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "67",
            "width": "98",
            "size": "47674",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "112",
            "width": "164",
            "size": "34124",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "328",
            "width": "480",
            "size": "516939",
            "url": "https://media4.giphy.com/media/dFWZ6mC5CxIBy/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPWRGV1o2bUM1Q3hJQnkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRGV1o2bUM1Q3hJQnkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRGV1o2bUM1Q3hJQnkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRGV1o2bUM1Q3hJQnkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "wjK3YnjoQf0go",
        "url": "https://giphy.com/gifs/wjK3YnjoQf0go",
        "slug": "wjK3YnjoQf0go",
        "bitly_gif_url": "http://gph.is/1Ei4Mt0",
        "bitly_url": "http://gph.is/1Ei4Mt0",
        "embed_url": "https://giphy.com/embed/wjK3YnjoQf0go",
        "username": "",
        "source": "Mon, 07 Jul 2014 11:30:25 +0000",
        "title": "Dog GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "",
        "source_post_url": "Mon, 07 Jul 2014 11:30:25 +0000",
        "is_sticker": 0,
        "import_datetime": "2015-05-19 21:46:52",
        "trending_datetime": "2019-06-30 05:00:01",
        "images": {
          "original": {
            "height": "263",
            "width": "350",
            "size": "958105",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "425620",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "396998",
            "webp": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "21",
            "hash": "6b3c26fc555a604333e747c0840ba01c"
          },
          "downsized": {
            "height": "263",
            "width": "350",
            "size": "958105",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "263",
            "width": "350",
            "size": "958105",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "263",
            "width": "350",
            "size": "958105",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "218",
            "width": "291",
            "mp4_size": "52259",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "263",
            "width": "350",
            "size": "958105",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "266",
            "size": "447085",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "88287",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "178470",
            "webp": "https://media3.giphy.com/media/wjK3YnjoQf0go/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "266",
            "size": "139709",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "78390",
            "webp": "https://media3.giphy.com/media/wjK3YnjoQf0go/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "133",
            "size": "137515",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "31194",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "64216",
            "webp": "https://media3.giphy.com/media/wjK3YnjoQf0go/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "133",
            "size": "7972",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "266",
            "size": "22324",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "276818",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "55880",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "111454",
            "webp": "https://media3.giphy.com/media/wjK3YnjoQf0go/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "80518",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "47538",
            "webp": "https://media3.giphy.com/media/wjK3YnjoQf0go/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "87601",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "20084",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "43894",
            "webp": "https://media3.giphy.com/media/wjK3YnjoQf0go/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "5019",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "18032",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2898296",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "263",
            "width": "350",
            "size": "50174",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "425620",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "112",
            "width": "149",
            "mp4_size": "19956",
            "mp4": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "61",
            "width": "81",
            "size": "48359",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "102",
            "width": "136",
            "size": "31602",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "361",
            "width": "480",
            "size": "958105",
            "url": "https://media3.giphy.com/media/wjK3YnjoQf0go/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPXdqSzNZbmpvUWYwZ28mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXdqSzNZbmpvUWYwZ28mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXdqSzNZbmpvUWYwZ28mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXdqSzNZbmpvUWYwZ28mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "aFTt8wvDtqKCQ",
        "url": "https://giphy.com/gifs/meme-shiba-inu-aFTt8wvDtqKCQ",
        "slug": "meme-shiba-inu-aFTt8wvDtqKCQ",
        "bitly_gif_url": "http://gph.is/19aLnvI",
        "bitly_url": "http://gph.is/19aLnvI",
        "embed_url": "https://giphy.com/embed/aFTt8wvDtqKCQ",
        "username": "",
        "source": "http://gifhell.com/",
        "title": "Shiba Inu Meme GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "gifhell.com",
        "source_post_url": "http://gifhell.com/",
        "is_sticker": 0,
        "import_datetime": "2013-11-30 19:38:30",
        "trending_datetime": "2021-02-21 03:00:13",
        "images": {
          "original": {
            "height": "490",
            "width": "393",
            "size": "1167476",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "237073",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "214702",
            "webp": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "24",
            "hash": "7b0d8139301746dd93aa03994b9ab69f"
          },
          "downsized": {
            "height": "490",
            "width": "393",
            "size": "1167476",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "490",
            "width": "393",
            "size": "1167476",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "490",
            "width": "393",
            "size": "1167476",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "490",
            "width": "392",
            "mp4_size": "170653",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "490",
            "width": "393",
            "size": "1167476",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "160",
            "size": "197042",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "30621",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "51206",
            "webp": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "160",
            "size": "51463",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "28292",
            "webp": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "80",
            "size": "67151",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "13417",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "21894",
            "webp": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "80",
            "size": "3474",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "160",
            "size": "9518",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "249",
            "width": "200",
            "size": "276112",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "40584",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "68282",
            "webp": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "249",
            "width": "200",
            "size": "72952",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "39120",
            "webp": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "125",
            "width": "100",
            "size": "93456",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "16329",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "28276",
            "webp": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "125",
            "width": "100",
            "size": "4492",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "249",
            "width": "200",
            "size": "11447",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1717766",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "490",
            "width": "393",
            "size": "54895",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "598",
            "width": "480",
            "mp4_size": "237073",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "264",
            "width": "211",
            "mp4_size": "21064",
            "mp4": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "99",
            "width": "79",
            "size": "47652",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "220",
            "width": "176",
            "size": "40972",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "598",
            "width": "480",
            "size": "1167476",
            "url": "https://media0.giphy.com/media/aFTt8wvDtqKCQ/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPWFGVHQ4d3ZEdHFLQ1EmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWFGVHQ4d3ZEdHFLQ1EmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWFGVHQ4d3ZEdHFLQ1EmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWFGVHQ4d3ZEdHFLQ1EmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "VHh8vqt8wldhm",
        "url": "https://giphy.com/gifs/burn-shade-VHh8vqt8wldhm",
        "slug": "burn-shade-VHh8vqt8wldhm",
        "bitly_gif_url": "http://gph.is/15JwktD",
        "bitly_url": "http://gph.is/15JwktD",
        "embed_url": "https://giphy.com/embed/VHh8vqt8wldhm",
        "username": "",
        "source": "http://mygifsnshxt.tumblr.com/post/51044853744",
        "title": "Meme Burn GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "mygifsnshxt.tumblr.com",
        "source_post_url": "http://mygifsnshxt.tumblr.com/post/51044853744",
        "is_sticker": 0,
        "import_datetime": "2013-08-06 02:29:28",
        "trending_datetime": "2019-09-17 15:15:12",
        "images": {
          "original": {
            "height": "250",
            "width": "350",
            "size": "691536",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "403831",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "471640",
            "webp": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "50",
            "hash": "88919324db4ed857142457dd95f72aac"
          },
          "downsized": {
            "height": "250",
            "width": "350",
            "size": "691536",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "250",
            "width": "350",
            "size": "691536",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "250",
            "width": "350",
            "size": "691536",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "216",
            "width": "302",
            "mp4_size": "106894",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "250",
            "width": "350",
            "size": "691536",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "280",
            "size": "468236",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "157623",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "330590",
            "webp": "https://media0.giphy.com/media/VHh8vqt8wldhm/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "280",
            "size": "91838",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "63542",
            "webp": "https://media0.giphy.com/media/VHh8vqt8wldhm/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "140",
            "size": "155786",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "54257",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "122096",
            "webp": "https://media0.giphy.com/media/VHh8vqt8wldhm/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "140",
            "size": "6088",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "280",
            "size": "19362",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "143",
            "width": "200",
            "size": "279014",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "89393",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "204132",
            "webp": "https://media0.giphy.com/media/VHh8vqt8wldhm/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "143",
            "width": "200",
            "size": "50878",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "36990",
            "webp": "https://media0.giphy.com/media/VHh8vqt8wldhm/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "72",
            "width": "100",
            "size": "94179",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "34397",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "74682",
            "webp": "https://media0.giphy.com/media/VHh8vqt8wldhm/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "72",
            "width": "100",
            "size": "3729",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "143",
            "width": "200",
            "size": "12519",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1020687",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "250",
            "width": "350",
            "size": "33910",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "342",
            "width": "480",
            "mp4_size": "403831",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "200",
            "width": "280",
            "mp4_size": "42009",
            "mp4": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "250",
            "width": "350",
            "size": "32395",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "250",
            "width": "350",
            "size": "38344",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "343",
            "width": "480",
            "size": "691536",
            "url": "https://media0.giphy.com/media/VHh8vqt8wldhm/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVZIaDh2cXQ4d2xkaG0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVZIaDh2cXQ4d2xkaG0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVZIaDh2cXQ4d2xkaG0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVZIaDh2cXQ4d2xkaG0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "EJIFaXV55556M",
        "url": "https://giphy.com/gifs/funny-weird-EJIFaXV55556M",
        "slug": "funny-weird-EJIFaXV55556M",
        "bitly_gif_url": "http://gph.is/15yCcWn",
        "bitly_url": "http://gph.is/15yCcWn",
        "embed_url": "https://giphy.com/embed/EJIFaXV55556M",
        "username": "",
        "source": "http://luzsianaranjo.tumblr.com/post/57033515579/ohh-myy-godd",
        "title": "funny just for laughs GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "luzsianaranjo.tumblr.com",
        "source_post_url": "http://luzsianaranjo.tumblr.com/post/57033515579/ohh-myy-godd",
        "is_sticker": 0,
        "import_datetime": "2013-08-01 15:26:23",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "306",
            "width": "358",
            "size": "1542618",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "800795",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "506418",
            "webp": "https://media0.giphy.com/media/EJIFaXV55556M/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "32",
            "hash": "f260225cd8b389c0dbf5b6cd14353eb0"
          },
          "downsized": {
            "height": "306",
            "width": "358",
            "size": "1542618",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "306",
            "width": "358",
            "size": "1542618",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "306",
            "width": "358",
            "size": "1542618",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "178",
            "width": "208",
            "mp4_size": "29365",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "306",
            "width": "358",
            "size": "1542618",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "234",
            "size": "414188",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "83223",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "136212",
            "webp": "https://media0.giphy.com/media/EJIFaXV55556M/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "234",
            "size": "78572",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "47012",
            "webp": "https://media0.giphy.com/media/EJIFaXV55556M/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "117",
            "size": "132652",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "22611",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "53548",
            "webp": "https://media0.giphy.com/media/EJIFaXV55556M/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "117",
            "size": "4808",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "234",
            "size": "16158",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "171",
            "width": "200",
            "size": "305781",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "56083",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "104164",
            "webp": "https://media0.giphy.com/media/EJIFaXV55556M/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "171",
            "width": "200",
            "size": "56343",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "35536",
            "webp": "https://media0.giphy.com/media/EJIFaXV55556M/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "86",
            "width": "100",
            "size": "105418",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "18487",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "44638",
            "webp": "https://media0.giphy.com/media/EJIFaXV55556M/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "86",
            "width": "100",
            "size": "4022",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "171",
            "width": "200",
            "size": "15718",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2553252",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "306",
            "width": "358",
            "size": "67337",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "410",
            "width": "480",
            "mp4_size": "800795",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "232",
            "width": "271",
            "mp4_size": "34765",
            "mp4": "https://media0.giphy.com/media/EJIFaXV55556M/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "63",
            "width": "74",
            "size": "47981",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "136",
            "width": "160",
            "size": "20984",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "410",
            "width": "480",
            "size": "1542618",
            "url": "https://media0.giphy.com/media/EJIFaXV55556M/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPUVKSUZhWFY1NTU1Nk0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVKSUZhWFY1NTU1Nk0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVKSUZhWFY1NTU1Nk0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVKSUZhWFY1NTU1Nk0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "6qdKZFhT0VBm0",
        "url": "https://giphy.com/gifs/6qdKZFhT0VBm0",
        "slug": "6qdKZFhT0VBm0",
        "bitly_gif_url": "http://gph.is/1q9pquQ",
        "bitly_url": "http://gph.is/1q9pquQ",
        "embed_url": "https://giphy.com/embed/6qdKZFhT0VBm0",
        "username": "",
        "source": "http://reddit.com/r/gifs/comments/2amm6p/spiderman/",
        "title": "Smash Spider Man GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "reddit.com",
        "source_post_url": "http://reddit.com/r/gifs/comments/2amm6p/spiderman/",
        "is_sticker": 0,
        "import_datetime": "2014-07-14 01:16:42",
        "trending_datetime": "2014-07-24 23:02:52",
        "images": {
          "original": {
            "height": "204",
            "width": "272",
            "size": "1778011",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "1226753",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "629056",
            "webp": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "55",
            "hash": "c60d84c3fff4b898a05c3214d055e662"
          },
          "downsized": {
            "height": "204",
            "width": "272",
            "size": "1778011",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "204",
            "width": "272",
            "size": "1778011",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "204",
            "width": "272",
            "size": "1778011",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "128",
            "width": "170",
            "mp4_size": "76533",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "204",
            "width": "272",
            "size": "1778011",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "1228783",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "307844",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "540484",
            "webp": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "141146",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "83656",
            "webp": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "357271",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "101706",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "178888",
            "webp": "https://media4.giphy.com/media/6qdKZFhT0VBm0/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "7886",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "22308",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "718427",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "190680",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "319600",
            "webp": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "81799",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "48942",
            "webp": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "223210",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "47778",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "120402",
            "webp": "https://media4.giphy.com/media/6qdKZFhT0VBm0/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "4584",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "15004",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2965489",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "204",
            "width": "272",
            "size": "40194",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "1226753",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "154",
            "width": "205",
            "mp4_size": "41598",
            "mp4": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "57",
            "width": "76",
            "size": "46915",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "114",
            "width": "152",
            "size": "37602",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "1778011",
            "url": "https://media4.giphy.com/media/6qdKZFhT0VBm0/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTZxZEtaRmhUMFZCbTAmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZxZEtaRmhUMFZCbTAmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZxZEtaRmhUMFZCbTAmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTZxZEtaRmhUMFZCbTAmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3o72F8t9TDi2xVnxOE",
        "url": "https://giphy.com/gifs/shocked-monkey-stunned-3o72F8t9TDi2xVnxOE",
        "slug": "shocked-monkey-stunned-3o72F8t9TDi2xVnxOE",
        "bitly_gif_url": "http://gph.is/28PfkrF",
        "bitly_url": "http://gph.is/28PfkrF",
        "embed_url": "https://giphy.com/embed/3o72F8t9TDi2xVnxOE",
        "username": "",
        "source": "https://impeccabletablemanners.files.wordpress.com/2016/05/monkey-puppet-omg-shock-gif.gif",
        "title": "Meme Reaction GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "impeccabletablemanners.files.wordpress.com",
        "source_post_url": "https://impeccabletablemanners.files.wordpress.com/2016/05/monkey-puppet-omg-shock-gif.gif",
        "is_sticker": 0,
        "import_datetime": "2016-06-23 15:28:27",
        "trending_datetime": "2021-05-11 08:45:10",
        "images": {
          "original": {
            "height": "218",
            "width": "320",
            "size": "1295565",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "796056",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "447638",
            "webp": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "49",
            "hash": "c5bacb4b9aea33d6b935ea8999b3e8da"
          },
          "downsized": {
            "height": "218",
            "width": "320",
            "size": "1295565",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "218",
            "width": "320",
            "size": "1295565",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "218",
            "width": "320",
            "size": "1295565",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "148",
            "width": "217",
            "mp4_size": "87030",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "218",
            "width": "320",
            "size": "1295565",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "294",
            "size": "1009118",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "298783",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "385460",
            "webp": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "294",
            "size": "143555",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "80056",
            "webp": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "147",
            "size": "353454",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "94092",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "156450",
            "webp": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "147",
            "size": "8833",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "294",
            "size": "23774",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "136",
            "width": "200",
            "size": "669038",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "156609",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "229288",
            "webp": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "136",
            "width": "200",
            "size": "81704",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "42022",
            "webp": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "68",
            "width": "100",
            "size": "193415",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "47573",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "98594",
            "webp": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "68",
            "width": "100",
            "size": "4992",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "136",
            "width": "200",
            "size": "15309",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2001759",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "218",
            "width": "320",
            "size": "34090",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "326",
            "width": "480",
            "mp4_size": "796056",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "166",
            "width": "243",
            "mp4_size": "40596",
            "mp4": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "59",
            "width": "87",
            "size": "47772",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "126",
            "width": "184",
            "size": "46778",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "327",
            "width": "480",
            "size": "1295565",
            "url": "https://media0.giphy.com/media/3o72F8t9TDi2xVnxOE/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNvNzJGOHQ5VERpMnhWbnhPRSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvNzJGOHQ5VERpMnhWbnhPRSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvNzJGOHQ5VERpMnhWbnhPRSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvNzJGOHQ5VERpMnhWbnhPRSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "5xqKWd6761tkY",
        "url": "https://giphy.com/gifs/weird-turkey-kramer-5xqKWd6761tkY",
        "slug": "weird-turkey-kramer-5xqKWd6761tkY",
        "bitly_gif_url": "http://gph.is/1hkiCC6",
        "bitly_url": "http://gph.is/1hkiCC6",
        "embed_url": "https://giphy.com/embed/5xqKWd6761tkY",
        "username": "",
        "source": "http://tumblr.com",
        "title": "Head Turkey GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "tumblr.com",
        "source_post_url": "http://tumblr.com",
        "is_sticker": 0,
        "import_datetime": "2014-01-22 21:02:02",
        "trending_datetime": "2014-10-03 00:50:03",
        "images": {
          "original": {
            "height": "375",
            "width": "500",
            "size": "592887",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "175081",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "219772",
            "webp": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "40",
            "hash": "32a56f2e70b5e8e32d95686628f08201"
          },
          "downsized": {
            "height": "375",
            "width": "500",
            "size": "592887",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "375",
            "width": "500",
            "size": "592887",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "375",
            "width": "500",
            "size": "592887",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "336",
            "width": "449",
            "mp4_size": "70107",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "375",
            "width": "500",
            "size": "592887",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "183318",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "44450",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "58784",
            "webp": "https://media4.giphy.com/media/5xqKWd6761tkY/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "54730",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "51616",
            "webp": "https://media4.giphy.com/media/5xqKWd6761tkY/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "77896",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "14723",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "23046",
            "webp": "https://media4.giphy.com/media/5xqKWd6761tkY/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "7456",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "20474",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "114474",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "27382",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "39692",
            "webp": "https://media4.giphy.com/media/5xqKWd6761tkY/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "31666",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "32952",
            "webp": "https://media4.giphy.com/media/5xqKWd6761tkY/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "48474",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "10311",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "15854",
            "webp": "https://media4.giphy.com/media/5xqKWd6761tkY/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "4714",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "12972",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "525448",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "375",
            "width": "500",
            "size": "102044",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "175081",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "296",
            "width": "395",
            "mp4_size": "24920",
            "mp4": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "139",
            "width": "185",
            "size": "49135",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "284",
            "width": "378",
            "size": "32778",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "592887",
            "url": "https://media4.giphy.com/media/5xqKWd6761tkY/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTV4cUtXZDY3NjF0a1kmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV4cUtXZDY3NjF0a1kmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV4cUtXZDY3NjF0a1kmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTV4cUtXZDY3NjF0a1kmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3TSfnFomy4M6c",
        "url": "https://giphy.com/gifs/halloween-3TSfnFomy4M6c",
        "slug": "halloween-3TSfnFomy4M6c",
        "bitly_gif_url": "http://gph.is/1Lxfr7Z",
        "bitly_url": "http://gph.is/1Lxfr7Z",
        "embed_url": "https://giphy.com/embed/3TSfnFomy4M6c",
        "username": "",
        "source": "http://www.reddit.com/r/gifs/comments/3pbg6h/is_this_for_halloween/",
        "title": "Dog Halloween GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/gifs/comments/3pbg6h/is_this_for_halloween/",
        "is_sticker": 0,
        "import_datetime": "2015-10-19 05:13:17",
        "trending_datetime": "2015-10-19 17:56:47",
        "images": {
          "original": {
            "height": "270",
            "width": "480",
            "size": "7362038",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "569114",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "1201918",
            "webp": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "125",
            "hash": "b7a582a2f8e13ac5ac7d064563afd0c8"
          },
          "downsized": {
            "height": "216",
            "width": "384",
            "size": "1501549",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "270",
            "width": "480",
            "size": "4893060",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-downsized-large.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-large.gif&ct=g"
          },
          "downsized_medium": {
            "height": "270",
            "width": "480",
            "size": "4893060",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-downsized-medium.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
            "height": "130",
            "width": "231",
            "mp4_size": "81916",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "216",
            "width": "384",
            "size": "27256",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "356",
            "size": "3092547",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "302437",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "689094",
            "webp": "https://media1.giphy.com/media/3TSfnFomy4M6c/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "356",
            "size": "158012",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "82092",
            "webp": "https://media1.giphy.com/media/3TSfnFomy4M6c/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "178",
            "size": "1136009",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "112159",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "271106",
            "webp": "https://media1.giphy.com/media/3TSfnFomy4M6c/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "178",
            "size": "10241",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "356",
            "size": "26629",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "113",
            "width": "200",
            "size": "1336434",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "119327",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "307424",
            "webp": "https://media1.giphy.com/media/3TSfnFomy4M6c/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "113",
            "width": "200",
            "size": "69616",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "31340",
            "webp": "https://media1.giphy.com/media/3TSfnFomy4M6c/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "388696",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "49041",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "132094",
            "webp": "https://media1.giphy.com/media/3TSfnFomy4M6c/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "57",
            "width": "100",
            "size": "4102",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "113",
            "width": "200",
            "size": "13252",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2509519",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "270",
            "width": "480",
            "size": "92180",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "270",
            "width": "480",
            "mp4_size": "569114",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "180",
            "width": "320",
            "mp4_size": "36747",
            "mp4": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "53",
            "width": "94",
            "size": "49315",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "98",
            "width": "174",
            "size": "36754",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "270",
            "width": "480",
            "size": "7362038",
            "url": "https://media1.giphy.com/media/3TSfnFomy4M6c/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNUU2ZuRm9teTRNNmMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNUU2ZuRm9teTRNNmMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNUU2ZuRm9teTRNNmMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNUU2ZuRm9teTRNNmMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "DKCNQcgbdekrC",
        "url": "https://giphy.com/gifs/bath-gorilla-DKCNQcgbdekrC",
        "slug": "bath-gorilla-DKCNQcgbdekrC",
        "bitly_gif_url": "",
        "bitly_url": "",
        "embed_url": "https://giphy.com/embed/DKCNQcgbdekrC",
        "username": "",
        "source": "https://www.reddit.com/r/gifs/comments/6j1ppw/gorilla_enjoying_a_bath/",
        "title": "Meme Bath GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "https://www.reddit.com/r/gifs/comments/6j1ppw/gorilla_enjoying_a_bath/",
        "is_sticker": 0,
        "import_datetime": "2017-06-23 15:12:31",
        "trending_datetime": "2017-06-26 18:16:13",
        "images": {
          "original": {
            "height": "269",
            "width": "480",
            "size": "21835553",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "3928033",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "7053150",
            "webp": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "218",
            "hash": "dee78cabc8c61872a32c018d87801ad8"
          },
          "downsized": {
            "height": "140",
            "width": "250",
            "size": "1718817",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "215",
            "width": "384",
            "size": "6565726",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-downsized-large.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-large.gif&ct=g"
          },
          "downsized_medium": {
            "height": "215",
            "width": "384",
            "size": "4863828",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-downsized-medium.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
            "height": "82",
            "width": "146",
            "mp4_size": "178735",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "140",
            "width": "250",
            "size": "30559",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "357",
            "size": "12504506",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "1964361",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "4076140",
            "webp": "https://media0.giphy.com/media/DKCNQcgbdekrC/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "357",
            "size": "340482",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "150146",
            "webp": "https://media0.giphy.com/media/DKCNQcgbdekrC/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "179",
            "size": "3374729",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "629158",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "1381586",
            "webp": "https://media0.giphy.com/media/DKCNQcgbdekrC/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "179",
            "size": "16654",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "357",
            "size": "58420",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "112",
            "width": "200",
            "size": "4168918",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "725815",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "1660228",
            "webp": "https://media0.giphy.com/media/DKCNQcgbdekrC/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "112",
            "width": "200",
            "size": "116710",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "54688",
            "webp": "https://media0.giphy.com/media/DKCNQcgbdekrC/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "56",
            "width": "100",
            "size": "1232287",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "42253",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "558088",
            "webp": "https://media0.giphy.com/media/DKCNQcgbdekrC/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "56",
            "width": "100",
            "size": "6476",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "112",
            "width": "200",
            "size": "20575",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2897593",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "269",
            "width": "480",
            "size": "100738",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "268",
            "width": "480",
            "mp4_size": "3928033",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "160",
            "width": "286",
            "mp4_size": "38310",
            "mp4": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "69",
            "width": "123",
            "size": "49299",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "80",
            "width": "143",
            "size": "46590",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "269",
            "width": "480",
            "size": "21835553",
            "url": "https://media0.giphy.com/media/DKCNQcgbdekrC/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPURLQ05RY2diZGVrckMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPURLQ05RY2diZGVrckMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPURLQ05RY2diZGVrckMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPURLQ05RY2diZGVrckMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "bGBQV839bsPnO",
        "url": "https://giphy.com/gifs/weird-jackie-chan-condom-bGBQV839bsPnO",
        "slug": "weird-jackie-chan-condom-bGBQV839bsPnO",
        "bitly_gif_url": "http://gph.is/1gEVFMM",
        "bitly_url": "http://gph.is/1gEVFMM",
        "embed_url": "https://giphy.com/embed/bGBQV839bsPnO",
        "username": "",
        "source": "http://www.reddit.com/r/gifs/comments/1t4tw4/jackie_chan_in_a_sexed_video/",
        "title": "weird jackie chan GIF",
        "rating": "pg-13",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/gifs/comments/1t4tw4/jackie_chan_in_a_sexed_video/",
        "is_sticker": 0,
        "import_datetime": "2013-12-18 02:34:22",
        "trending_datetime": "1970-01-01 00:00:00",
        "images": {
          "original": {
            "height": "208",
            "width": "368",
            "size": "843554",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "769329",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "356528",
            "webp": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "21",
            "hash": "1f529aa763d343804d95724abc426f1e"
          },
          "downsized": {
            "height": "208",
            "width": "368",
            "size": "843554",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "208",
            "width": "368",
            "size": "843554",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "208",
            "width": "368",
            "size": "843554",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "126",
            "width": "222",
            "mp4_size": "35968",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "208",
            "width": "368",
            "size": "843554",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "354",
            "size": "613329",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "317639",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "280380",
            "webp": "https://media2.giphy.com/media/bGBQV839bsPnO/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "354",
            "size": "186889",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "94820",
            "webp": "https://media2.giphy.com/media/bGBQV839bsPnO/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "177",
            "size": "137801",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "46090",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "49428",
            "webp": "https://media2.giphy.com/media/bGBQV839bsPnO/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "177",
            "size": "6800",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "354",
            "size": "28843",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "113",
            "width": "200",
            "size": "198045",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "55354",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "62454",
            "webp": "https://media2.giphy.com/media/bGBQV839bsPnO/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "113",
            "width": "200",
            "size": "56179",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "27326",
            "webp": "https://media2.giphy.com/media/bGBQV839bsPnO/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "52245",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "18789",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "26242",
            "webp": "https://media2.giphy.com/media/bGBQV839bsPnO/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "57",
            "width": "100",
            "size": "3021",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "113",
            "width": "200",
            "size": "8952",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "3289753",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "208",
            "width": "368",
            "size": "40927",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "270",
            "width": "480",
            "mp4_size": "769329",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "106",
            "width": "187",
            "mp4_size": "44196",
            "mp4": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "65",
            "width": "115",
            "size": "49910",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "104",
            "width": "184",
            "size": "17952",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "271",
            "width": "480",
            "size": "843554",
            "url": "https://media2.giphy.com/media/bGBQV839bsPnO/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPWJHQlFWODM5YnNQbk8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJHQlFWODM5YnNQbk8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJHQlFWODM5YnNQbk8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWJHQlFWODM5YnNQbk8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "rOqkW1ECPlUZi",
        "url": "https://giphy.com/gifs/dog-weird-marlo-meekins-rOqkW1ECPlUZi",
        "slug": "dog-weird-marlo-meekins-rOqkW1ECPlUZi",
        "bitly_gif_url": "http://gph.is/13JC9sm",
        "bitly_url": "http://gph.is/13JC9sm",
        "embed_url": "https://giphy.com/embed/rOqkW1ECPlUZi",
        "username": "",
        "source": "http://prguitarman.tumblr.com/post/53874276034",
        "title": "Marlo Meekins Dog GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "prguitarman.tumblr.com",
        "source_post_url": "http://prguitarman.tumblr.com/post/53874276034",
        "is_sticker": 0,
        "import_datetime": "2013-07-09 15:04:11",
        "trending_datetime": "2019-09-30 01:15:10",
        "images": {
          "original": {
            "height": "399",
            "width": "399",
            "size": "1707521",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "542436",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "586658",
            "webp": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "25",
            "hash": "10d1e867cb46a79901fb834ca1d7fb19"
          },
          "downsized": {
            "height": "399",
            "width": "399",
            "size": "1707521",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "399",
            "width": "399",
            "size": "1707521",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "399",
            "width": "399",
            "size": "1707521",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "284",
            "width": "284",
            "mp4_size": "47144",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "399",
            "width": "399",
            "size": "1707521",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "200",
            "size": "355312",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "55829",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "168606",
            "webp": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "200",
            "size": "126860",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "60382",
            "webp": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "100",
            "size": "119808",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "15389",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "60256",
            "webp": "https://media1.giphy.com/media/rOqkW1ECPlUZi/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "100",
            "size": "5723",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "200",
            "size": "15204",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "200",
            "width": "200",
            "size": "355312",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "55829",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "168606",
            "webp": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "200",
            "width": "200",
            "size": "126860",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "60382",
            "webp": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "100",
            "width": "100",
            "size": "119808",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "15389",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "60256",
            "webp": "https://media1.giphy.com/media/rOqkW1ECPlUZi/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "100",
            "width": "100",
            "size": "5723",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "200",
            "width": "200",
            "size": "15204",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2223293",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "399",
            "width": "399",
            "size": "84441",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "478",
            "width": "480",
            "mp4_size": "542436",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "278",
            "width": "278",
            "mp4_size": "27846",
            "mp4": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "80",
            "width": "80",
            "size": "49886",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "134",
            "width": "134",
            "size": "37524",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "480",
            "width": "480",
            "size": "1707521",
            "url": "https://media1.giphy.com/media/rOqkW1ECPlUZi/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPXJPcWtXMUVDUGxVWmkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXJPcWtXMUVDUGxVWmkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXJPcWtXMUVDUGxVWmkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXJPcWtXMUVDUGxVWmkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "YqGeOQ0u6hB5u",
        "url": "https://giphy.com/gifs/YqGeOQ0u6hB5u",
        "slug": "YqGeOQ0u6hB5u",
        "bitly_gif_url": "http://gph.is/1McIjXU",
        "bitly_url": "http://gph.is/1McIjXU",
        "embed_url": "https://giphy.com/embed/YqGeOQ0u6hB5u",
        "username": "",
        "source": "http://www.reddit.com/r/gifs/comments/3g0109/not_too_sure_what_to_say_about_this/",
        "title": "Talk Show Face Swap GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/gifs/comments/3g0109/not_too_sure_what_to_say_about_this/",
        "is_sticker": 0,
        "import_datetime": "2015-08-06 13:21:37",
        "trending_datetime": "2015-08-06 22:26:19",
        "images": {
          "original": {
            "height": "376",
            "width": "360",
            "size": "5168089",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "3230921",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "2088514",
            "webp": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "151",
            "hash": "113ea45cf13e28ffade7f19326981f56"
          },
          "downsized": {
            "height": "376",
            "width": "360",
            "size": "1584052",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "376",
            "width": "360",
            "size": "5168089",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "376",
            "width": "360",
            "size": "3824027",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy-downsized-medium.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
            "height": "150",
            "width": "143",
            "mp4_size": "153055",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "376",
            "width": "360",
            "size": "46467",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "191",
            "size": "1501017",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "419565",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "709732",
            "webp": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "191",
            "size": "87252",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "53654",
            "webp": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "96",
            "size": "506135",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "135395",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "306844",
            "webp": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "96",
            "size": "4741",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "191",
            "size": "12733",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "209",
            "width": "200",
            "size": "1625123",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "440744",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "750342",
            "webp": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "209",
            "width": "200",
            "size": "92980",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "58742",
            "webp": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "105",
            "width": "100",
            "size": "550525",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "42120",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "307006",
            "webp": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "105",
            "width": "100",
            "size": "5088",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "209",
            "width": "200",
            "size": "13765",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2235475",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "376",
            "width": "360",
            "size": "59317",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "500",
            "width": "480",
            "mp4_size": "3230921",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "228",
            "width": "218",
            "mp4_size": "39565",
            "mp4": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "98",
            "width": "94",
            "size": "47578",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "190",
            "width": "182",
            "size": "41294",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "501",
            "width": "480",
            "size": "5168089",
            "url": "https://media2.giphy.com/media/YqGeOQ0u6hB5u/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVlxR2VPUTB1NmhCNXUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlxR2VPUTB1NmhCNXUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlxR2VPUTB1NmhCNXUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVlxR2VPUTB1NmhCNXUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "SQQ5VpVKhCM9O",
        "url": "https://giphy.com/gifs/SQQ5VpVKhCM9O",
        "slug": "SQQ5VpVKhCM9O",
        "bitly_gif_url": "http://gph.is/1C62nTe",
        "bitly_url": "http://gph.is/1C62nTe",
        "embed_url": "https://giphy.com/embed/SQQ5VpVKhCM9O",
        "username": "",
        "source": "http://reddit.com/r/HighQualityGifs/comments/2s3xgh/just_doin_laser_wolf_stuff/",
        "title": "Radio Nod GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "reddit.com",
        "source_post_url": "http://reddit.com/r/HighQualityGifs/comments/2s3xgh/just_doin_laser_wolf_stuff/",
        "is_sticker": 0,
        "import_datetime": "2015-01-11 23:46:24",
        "trending_datetime": "2015-01-12 18:29:45",
        "images": {
          "original": {
            "height": "270",
            "width": "480",
            "size": "734377",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "56347",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "80620",
            "webp": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "16",
            "hash": "cc9e169e7866fe82d2f2e85dba12c866"
          },
          "downsized": {
            "height": "270",
            "width": "480",
            "size": "734377",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "270",
            "width": "480",
            "size": "734377",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "270",
            "width": "480",
            "size": "734377",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "270",
            "width": "480",
            "mp4_size": "62427",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "270",
            "width": "480",
            "size": "734377",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "356",
            "size": "290020",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "30894",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "48810",
            "webp": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "356",
            "size": "123400",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "78006",
            "webp": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "178",
            "size": "98573",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "11994",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "20618",
            "webp": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "178",
            "size": "6991",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "356",
            "size": "18769",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "113",
            "width": "200",
            "size": "132515",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "13122",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "23714",
            "webp": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "113",
            "width": "200",
            "size": "50596",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "28310",
            "webp": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "42894",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "5901",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "10350",
            "webp": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "57",
            "width": "100",
            "size": "3414",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "113",
            "width": "200",
            "size": "10220",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1444296",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "270",
            "width": "480",
            "size": "100468",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "268",
            "width": "480",
            "mp4_size": "56347",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "240",
            "width": "426",
            "mp4_size": "19207",
            "mp4": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "63",
            "width": "112",
            "size": "48983",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "194",
            "width": "344",
            "size": "39584",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "270",
            "width": "480",
            "size": "734377",
            "url": "https://media0.giphy.com/media/SQQ5VpVKhCM9O/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVNRUTVWcFZLaENNOU8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNRUTVWcFZLaENNOU8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNRUTVWcFZLaENNOU8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVNRUTVWcFZLaENNOU8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "eCGTfFtjcp928",
        "url": "https://giphy.com/gifs/internet-eCGTfFtjcp928",
        "slug": "internet-eCGTfFtjcp928",
        "bitly_gif_url": "http://gph.is/1aXAKhP",
        "bitly_url": "http://gph.is/1aXAKhP",
        "embed_url": "https://giphy.com/embed/eCGTfFtjcp928",
        "username": "",
        "source": "http://www.reddit.com/r/gifs/comments/1pv0sn/found_this_gif_on_the_internet_and_it_so_amazing/",
        "title": "Power Rangers Dancing GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/gifs/comments/1pv0sn/found_this_gif_on_the_internet_and_it_so_amazing/",
        "is_sticker": 0,
        "import_datetime": "2013-11-04 07:21:03",
        "trending_datetime": "2015-05-15 14:35:38",
        "images": {
          "original": {
            "height": "166",
            "width": "224",
            "size": "2617259",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "2629048",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "1264148",
            "webp": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "181",
            "hash": "d96cac5efe349080adb4b71edc059f28"
          },
          "downsized": {
            "height": "166",
            "width": "224",
            "size": "1952533",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "166",
            "width": "224",
            "size": "2617259",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "166",
            "width": "224",
            "size": "2617259",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "110",
            "width": "148",
            "mp4_size": "170765",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "166",
            "width": "224",
            "size": "13392",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "270",
            "size": "3210379",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "973526",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "1512804",
            "webp": "https://media1.giphy.com/media/eCGTfFtjcp928/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "270",
            "size": "110892",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "68616",
            "webp": "https://media1.giphy.com/media/eCGTfFtjcp928/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "135",
            "size": "1075097",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "341032",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "590218",
            "webp": "https://media1.giphy.com/media/eCGTfFtjcp928/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "135",
            "size": "8175",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "270",
            "size": "21435",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "148",
            "width": "200",
            "size": "2168953",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "627763",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "1032860",
            "webp": "https://media1.giphy.com/media/eCGTfFtjcp928/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "148",
            "width": "200",
            "size": "71448",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "43922",
            "webp": "https://media1.giphy.com/media/eCGTfFtjcp928/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "74",
            "width": "100",
            "size": "665412",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "45393",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "391642",
            "webp": "https://media1.giphy.com/media/eCGTfFtjcp928/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "74",
            "width": "100",
            "size": "5045",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "148",
            "width": "200",
            "size": "16198",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "3117489",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "166",
            "width": "224",
            "size": "19656",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "354",
            "width": "480",
            "mp4_size": "2629048",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "114",
            "width": "153",
            "mp4_size": "43252",
            "mp4": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "58",
            "width": "78",
            "size": "47208",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "102",
            "width": "138",
            "size": "47766",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "356",
            "width": "480",
            "size": "2617259",
            "url": "https://media1.giphy.com/media/eCGTfFtjcp928/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPWVDR1RmRnRqY3A5MjgmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWVDR1RmRnRqY3A5MjgmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWVDR1RmRnRqY3A5MjgmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWVDR1RmRnRqY3A5MjgmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "RYNVOL3w1wPok",
        "url": "https://giphy.com/gifs/weird-baby-grandma-RYNVOL3w1wPok",
        "slug": "weird-baby-grandma-RYNVOL3w1wPok",
        "bitly_gif_url": "http://gph.is/10FzTA7",
        "bitly_url": "http://gph.is/10FzTA7",
        "embed_url": "https://giphy.com/embed/RYNVOL3w1wPok",
        "username": "",
        "source": "http://www.reddit.com/r/whitepeoplegifs/comments/161v08/every_time_i_see_new_subscribers/",
        "title": "Baby Babies GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/whitepeoplegifs/comments/161v08/every_time_i_see_new_subscribers/",
        "is_sticker": 0,
        "import_datetime": "2013-05-31 21:44:23",
        "trending_datetime": "2014-08-13 12:49:25",
        "images": {
          "original": {
            "height": "188",
            "width": "250",
            "size": "1296504",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "724674",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "407622",
            "webp": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "40",
            "hash": "9b913adc1f10de7b15a6ab4ea5d834c0"
          },
          "downsized": {
            "height": "188",
            "width": "250",
            "size": "1296504",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "188",
            "width": "250",
            "size": "1296504",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "188",
            "width": "250",
            "size": "1296504",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "162",
            "width": "215",
            "mp4_size": "94473",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "188",
            "width": "250",
            "size": "1296504",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "266",
            "size": "1102749",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "225207",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "412792",
            "webp": "https://media4.giphy.com/media/RYNVOL3w1wPok/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "266",
            "size": "175170",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "90974",
            "webp": "https://media4.giphy.com/media/RYNVOL3w1wPok/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "133",
            "size": "323596",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "78105",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "148436",
            "webp": "https://media4.giphy.com/media/RYNVOL3w1wPok/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "133",
            "size": "8842",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "266",
            "size": "24820",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "650128",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "147327",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "272794",
            "webp": "https://media4.giphy.com/media/RYNVOL3w1wPok/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "103667",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "57148",
            "webp": "https://media4.giphy.com/media/RYNVOL3w1wPok/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "193792",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "48540",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "97454",
            "webp": "https://media4.giphy.com/media/RYNVOL3w1wPok/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "5313",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "15083",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "3377880",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "188",
            "width": "250",
            "size": "33844",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "724674",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "128",
            "width": "170",
            "mp4_size": "42469",
            "mp4": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "56",
            "width": "74",
            "size": "48785",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "110",
            "width": "146",
            "size": "42140",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "361",
            "width": "480",
            "size": "1296504",
            "url": "https://media4.giphy.com/media/RYNVOL3w1wPok/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVJZTlZPTDN3MXdQb2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVJZTlZPTDN3MXdQb2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVJZTlZPTDN3MXdQb2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVJZTlZPTDN3MXdQb2smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "X1tTJzw2LMyIw",
        "url": "https://giphy.com/gifs/taco-food-weird-X1tTJzw2LMyIw",
        "slug": "taco-food-weird-X1tTJzw2LMyIw",
        "bitly_gif_url": "http://gph.is/1a5KRFx",
        "bitly_url": "http://gph.is/1a5KRFx",
        "embed_url": "https://giphy.com/embed/X1tTJzw2LMyIw",
        "username": "",
        "source": "http://the-krustykrabb.tumblr.com/post/10365343304",
        "title": "Food Sky GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "tumblr.com",
        "source_post_url": "http://the-krustykrabb.tumblr.com/post/10365343304",
        "is_sticker": 0,
        "import_datetime": "2014-01-31 08:21:15",
        "trending_datetime": "2017-10-05 02:45:01",
        "images": {
          "original": {
            "height": "280",
            "width": "500",
            "size": "422765",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "182618",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "230232",
            "webp": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "8",
            "hash": "5e35e92c7a23747cc8761a7316806155"
          },
          "downsized": {
            "height": "280",
            "width": "500",
            "size": "422765",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "280",
            "width": "500",
            "size": "422765",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "280",
            "width": "500",
            "size": "422765",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "252",
            "width": "450",
            "mp4_size": "59029",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "280",
            "width": "500",
            "size": "422765",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "357",
            "size": "189673",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "77585",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "110800",
            "webp": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "357",
            "size": "153826",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "115318",
            "webp": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "179",
            "size": "62973",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "22831",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "34778",
            "webp": "https://media0.giphy.com/media/X1tTJzw2LMyIw/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "179",
            "size": "10311",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "357",
            "size": "26605",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "112",
            "width": "200",
            "size": "76708",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "26694",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "39880",
            "webp": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "112",
            "width": "200",
            "size": "56561",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "41346",
            "webp": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "56",
            "width": "100",
            "size": "22416",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "9824",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "14652",
            "webp": "https://media0.giphy.com/media/X1tTJzw2LMyIw/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "56",
            "width": "100",
            "size": "3766",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "112",
            "width": "200",
            "size": "13230",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1580587",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "280",
            "width": "500",
            "size": "70185",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "268",
            "width": "480",
            "mp4_size": "182618",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "126",
            "width": "225",
            "mp4_size": "16904",
            "mp4": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "64",
            "width": "114",
            "size": "48215",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "104",
            "width": "186",
            "size": "31362",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "269",
            "width": "480",
            "size": "422765",
            "url": "https://media0.giphy.com/media/X1tTJzw2LMyIw/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVgxdFRKencyTE15SXcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVgxdFRKencyTE15SXcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVgxdFRKencyTE15SXcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVgxdFRKencyTE15SXcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "JEVqknUonZJWU",
        "url": "https://giphy.com/gifs/force-awakens-behindthescenes-JEVqknUonZJWU",
        "slug": "force-awakens-behindthescenes-JEVqknUonZJWU",
        "bitly_gif_url": "http://gph.is/1IQSYFy",
        "bitly_url": "http://gph.is/1IQSYFy",
        "embed_url": "https://giphy.com/embed/JEVqknUonZJWU",
        "username": "",
        "source": "http://io9.com/comic-cons-behind-the-scenes-footage-of-star-wars-the-1717155811",
        "title": "Sad Meme GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "io9.com",
        "source_post_url": "http://io9.com/comic-cons-behind-the-scenes-footage-of-star-wars-the-1717155811",
        "is_sticker": 0,
        "import_datetime": "2015-07-11 09:41:29",
        "trending_datetime": "2021-02-20 22:30:14",
        "images": {
          "original": {
            "height": "154",
            "width": "320",
            "size": "72365",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "29567",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "18312",
            "webp": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "3",
            "hash": "2032eef5c15c2c1c12581b04a243a7f6"
          },
          "downsized": {
            "height": "154",
            "width": "320",
            "size": "72365",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "154",
            "width": "320",
            "size": "72365",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "154",
            "width": "320",
            "size": "72365",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "154",
            "width": "320",
            "mp4_size": "16847",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "154",
            "width": "320",
            "size": "72365",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "416",
            "size": "77691",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "18746",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "23742",
            "webp": "https://media4.giphy.com/media/JEVqknUonZJWU/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "416",
            "size": "77691",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "38520",
            "webp": "https://media4.giphy.com/media/JEVqknUonZJWU/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "208",
            "size": "28289",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "6541",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "9292",
            "webp": "https://media4.giphy.com/media/JEVqknUonZJWU/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "208",
            "size": "11052",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "416",
            "size": "26462",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "96",
            "width": "200",
            "size": "23534",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "5993",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "8758",
            "webp": "https://media4.giphy.com/media/JEVqknUonZJWU/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "96",
            "width": "200",
            "size": "23534",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "12538",
            "webp": "https://media4.giphy.com/media/JEVqknUonZJWU/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "48",
            "width": "100",
            "size": "8158",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "2935",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "3406",
            "webp": "https://media4.giphy.com/media/JEVqknUonZJWU/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "48",
            "width": "100",
            "size": "3373",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "96",
            "width": "200",
            "size": "10315",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1043780",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "154",
            "width": "320",
            "size": "37459",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "230",
            "width": "480",
            "mp4_size": "29567",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "154",
            "width": "320",
            "mp4_size": "16847",
            "mp4": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "154",
            "width": "320",
            "size": "35165",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "154",
            "width": "320",
            "size": "18312",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "231",
            "width": "480",
            "size": "72365",
            "url": "https://media4.giphy.com/media/JEVqknUonZJWU/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPUpFVnFrblVvblpKV1UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUpFVnFrblVvblpKV1UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUpFVnFrblVvblpKV1UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUpFVnFrblVvblpKV1UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "qLa4BxKoJphYI",
        "url": "https://giphy.com/gifs/reaction-animated-hat-qLa4BxKoJphYI",
        "slug": "reaction-animated-hat-qLa4BxKoJphYI",
        "bitly_gif_url": "http://gph.is/1eY0Ipr",
        "bitly_url": "http://gph.is/1eY0Ipr",
        "embed_url": "https://giphy.com/embed/qLa4BxKoJphYI",
        "username": "",
        "source": "http://imgur.com/gallery/lBV3Xze",
        "title": "Hot Dog Reaction GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "imgur.com",
        "source_post_url": "http://imgur.com/gallery/lBV3Xze",
        "is_sticker": 0,
        "import_datetime": "2014-02-13 21:38:03",
        "trending_datetime": "2017-07-12 05:30:01",
        "images": {
          "original": {
            "height": "375",
            "width": "500",
            "size": "96254",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "64461",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "70392",
            "webp": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "8",
            "hash": "29e0c6fa14b526fa94d92ac879dfb29e"
          },
          "downsized": {
            "height": "375",
            "width": "500",
            "size": "96254",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "375",
            "width": "500",
            "size": "96254",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "375",
            "width": "500",
            "size": "96254",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "374",
            "width": "500",
            "mp4_size": "77611",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "375",
            "width": "500",
            "size": "96254",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "36746",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "16290",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "18254",
            "webp": "https://media1.giphy.com/media/qLa4BxKoJphYI/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "38126",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "25902",
            "webp": "https://media1.giphy.com/media/qLa4BxKoJphYI/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "13144",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "5785",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "6744",
            "webp": "https://media1.giphy.com/media/qLa4BxKoJphYI/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "6373",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "17630",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "23197",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "10095",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "11872",
            "webp": "https://media1.giphy.com/media/qLa4BxKoJphYI/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "21449",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "15670",
            "webp": "https://media1.giphy.com/media/qLa4BxKoJphYI/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "8680",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "4178",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "4902",
            "webp": "https://media1.giphy.com/media/qLa4BxKoJphYI/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "4414",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "11154",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1865958",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "375",
            "width": "500",
            "size": "59705",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "64461",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "298",
            "width": "398",
            "mp4_size": "22018",
            "mp4": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "167",
            "width": "223",
            "size": "48686",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "334",
            "width": "446",
            "size": "37028",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "96254",
            "url": "https://media1.giphy.com/media/qLa4BxKoJphYI/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPXFMYTRCeEtvSnBoWUkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXFMYTRCeEtvSnBoWUkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXFMYTRCeEtvSnBoWUkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXFMYTRCeEtvSnBoWUkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "nwNHCOkzDN7uo",
        "url": "https://giphy.com/gifs/random-onehallyu-ui7onszgif-nwNHCOkzDN7uo",
        "slug": "random-onehallyu-ui7onszgif-nwNHCOkzDN7uo",
        "bitly_gif_url": "http://gph.is/2jiOemX",
        "bitly_url": "http://gph.is/2jiOemX",
        "embed_url": "https://giphy.com/embed/nwNHCOkzDN7uo",
        "username": "",
        "source": "http://onehallyu.com/topic/462787-what-are-your-favourite-gifs/",
        "title": "random GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "onehallyu.com",
        "source_post_url": "http://onehallyu.com/topic/462787-what-are-your-favourite-gifs/",
        "is_sticker": 0,
        "import_datetime": "2017-01-29 12:14:40",
        "trending_datetime": "0000-00-00 00:00:00",
        "images": {
          "original": {
            "height": "240",
            "width": "320",
            "size": "880995",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "102186",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "303272",
            "webp": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "24",
            "hash": "108dc99fd7a74912d4e44c4dbc2c0cd1"
          },
          "downsized": {
            "height": "240",
            "width": "320",
            "size": "880995",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "240",
            "width": "320",
            "size": "880995",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "240",
            "width": "320",
            "size": "880995",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "240",
            "width": "320",
            "mp4_size": "73671",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "240",
            "width": "320",
            "size": "880995",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "653421",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "25035",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "199584",
            "webp": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "176177",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "49800",
            "webp": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "178635",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "8378",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "63746",
            "webp": "https://media4.giphy.com/media/nwNHCOkzDN7uo/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "8810",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "30070",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "380952",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "16230",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "121152",
            "webp": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "103817",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "30542",
            "webp": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "104846",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "5598",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "42156",
            "webp": "https://media4.giphy.com/media/nwNHCOkzDN7uo/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "5579",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "18227",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1066148",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "240",
            "width": "320",
            "size": "39466",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "102186",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "196",
            "width": "262",
            "mp4_size": "35081",
            "mp4": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "84",
            "width": "112",
            "size": "49484",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "144",
            "width": "192",
            "size": "47764",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "880995",
            "url": "https://media4.giphy.com/media/nwNHCOkzDN7uo/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPW53TkhDT2t6RE43dW8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW53TkhDT2t6RE43dW8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW53TkhDT2t6RE43dW8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW53TkhDT2t6RE43dW8mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "AxVvjOTeDz1EhGVfHy",
        "url": "https://giphy.com/gifs/commercial-guitar-hursts-beans-AxVvjOTeDz1EhGVfHy",
        "slug": "commercial-guitar-hursts-beans-AxVvjOTeDz1EhGVfHy",
        "bitly_gif_url": "http://gph.is/17QVUlF",
        "bitly_url": "http://gph.is/17QVUlF",
        "embed_url": "https://giphy.com/embed/AxVvjOTeDz1EhGVfHy",
        "username": "",
        "source": "https://www.youtube.com/watch?v=SAni1ekkW74",
        "title": "Awkward Rock Star GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.youtube.com",
        "source_post_url": "https://www.youtube.com/watch?v=SAni1ekkW74",
        "is_sticker": 0,
        "import_datetime": "2015-03-04 17:19:58",
        "trending_datetime": "2018-12-07 12:45:02",
        "images": {
          "original": {
            "height": "360",
            "width": "478",
            "size": "572360",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "253588",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "327754",
            "webp": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "16",
            "hash": "f4104fc8b602c3cda44fb9255140505c"
          },
          "downsized": {
            "height": "360",
            "width": "478",
            "size": "572360",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "360",
            "width": "478",
            "size": "572360",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "360",
            "width": "478",
            "size": "572360",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "310",
            "width": "411",
            "mp4_size": "77712",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "360",
            "width": "478",
            "size": "572360",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "266",
            "size": "284434",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "72382",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "138996",
            "webp": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "266",
            "size": "114085",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "70580",
            "webp": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "133",
            "size": "94731",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "22321",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "50840",
            "webp": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "133",
            "size": "6972",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "266",
            "size": "19526",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "151",
            "width": "200",
            "size": "201633",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "46244",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "94886",
            "webp": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "151",
            "width": "200",
            "size": "82795",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "46928",
            "webp": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "76",
            "width": "100",
            "size": "60423",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "12687",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "33236",
            "webp": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "76",
            "width": "100",
            "size": "4597",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "151",
            "width": "200",
            "size": "15097",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1626885",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "360",
            "width": "478",
            "size": "42109",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "253588",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "154",
            "width": "204",
            "mp4_size": "24131",
            "mp4": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "75",
            "width": "100",
            "size": "48657",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "142",
            "width": "188",
            "size": "47510",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "362",
            "width": "480",
            "size": "572360",
            "url": "https://media3.giphy.com/media/AxVvjOTeDz1EhGVfHy/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPUF4VnZqT1RlRHoxRWhHVmZIeSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUF4VnZqT1RlRHoxRWhHVmZIeSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUF4VnZqT1RlRHoxRWhHVmZIeSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUF4VnZqT1RlRHoxRWhHVmZIeSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "W8tVTtVKk88ww",
        "url": "https://giphy.com/gifs/W8tVTtVKk88ww",
        "slug": "W8tVTtVKk88ww",
        "bitly_gif_url": "http://gph.is/1rYuljG",
        "bitly_url": "http://gph.is/1rYuljG",
        "embed_url": "https://giphy.com/embed/W8tVTtVKk88ww",
        "username": "",
        "source": "http://reddit.com/r/reactiongifs/comments/2rf7lz/mrw_i_walk_into_my_room_at_3am_and_see_a_mouse/",
        "title": "Jimmy Neutron What GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "reddit.com",
        "source_post_url": "http://reddit.com/r/reactiongifs/comments/2rf7lz/mrw_i_walk_into_my_room_at_3am_and_see_a_mouse/",
        "is_sticker": 0,
        "import_datetime": "2015-01-05 18:17:42",
        "trending_datetime": "2019-01-13 08:45:01",
        "images": {
          "original": {
            "height": "367",
            "width": "500",
            "size": "7461658",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "676269",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "1324946",
            "webp": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "88",
            "hash": "1ca3d4e2b72cd7d1cdb21aa6b12425e5"
          },
          "downsized": {
            "height": "286",
            "width": "390",
            "size": "1911192",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "367",
            "width": "500",
            "size": "4101897",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-downsized-large.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-large.gif&ct=g"
          },
          "downsized_medium": {
            "height": "367",
            "width": "500",
            "size": "4101897",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-downsized-medium.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
            "height": "164",
            "width": "224",
            "mp4_size": "86951",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "286",
            "width": "390",
            "size": "37594",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "272",
            "size": "1653150",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "199824",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "444674",
            "webp": "https://media0.giphy.com/media/W8tVTtVKk88ww/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "272",
            "size": "133705",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "78620",
            "webp": "https://media0.giphy.com/media/W8tVTtVKk88ww/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "136",
            "size": "527555",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "91294",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "188836",
            "webp": "https://media0.giphy.com/media/W8tVTtVKk88ww/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "136",
            "size": "7910",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "272",
            "size": "22168",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "147",
            "width": "200",
            "size": "1048489",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "144669",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "306904",
            "webp": "https://media0.giphy.com/media/W8tVTtVKk88ww/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "147",
            "width": "200",
            "size": "76774",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "46874",
            "webp": "https://media0.giphy.com/media/W8tVTtVKk88ww/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "74",
            "width": "100",
            "size": "321069",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "48216",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "121388",
            "webp": "https://media0.giphy.com/media/W8tVTtVKk88ww/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "74",
            "width": "100",
            "size": "4685",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "147",
            "width": "200",
            "size": "13581",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1673070",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "367",
            "width": "500",
            "size": "114084",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "352",
            "width": "480",
            "mp4_size": "676269",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "212",
            "width": "289",
            "mp4_size": "37318",
            "mp4": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "59",
            "width": "80",
            "size": "49198",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "112",
            "width": "152",
            "size": "44802",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "352",
            "width": "480",
            "size": "7461658",
            "url": "https://media0.giphy.com/media/W8tVTtVKk88ww/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPVc4dFZUdFZLazg4d3cmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVc4dFZUdFZLazg4d3cmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVc4dFZUdFZLazg4d3cmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPVc4dFZUdFZLazg4d3cmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "MMQrQQ87G2MmY",
        "url": "https://giphy.com/gifs/weird-fun-excited-MMQrQQ87G2MmY",
        "slug": "weird-fun-excited-MMQrQQ87G2MmY",
        "bitly_gif_url": "http://gph.is/VwxJ2L",
        "bitly_url": "http://gph.is/VwxJ2L",
        "embed_url": "https://giphy.com/embed/MMQrQQ87G2MmY",
        "username": "",
        "source": "https://www.youtube.com/watch?v=7G3bTuHo7qw#t=26",
        "title": "Excited Roller Coaster GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.youtube.com",
        "source_post_url": "https://www.youtube.com/watch?v=7G3bTuHo7qw#t=26",
        "is_sticker": 0,
        "import_datetime": "1970-01-01 00:00:00",
        "trending_datetime": "2022-04-03 20:45:05",
        "images": {
          "original": {
            "height": "302",
            "width": "350",
            "size": "991643",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "1030945",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "555374",
            "webp": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "22",
            "hash": "72c109c75551ea445034e1e7929ab7e9"
          },
          "downsized": {
            "height": "302",
            "width": "350",
            "size": "991643",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "302",
            "width": "350",
            "size": "991643",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "302",
            "width": "350",
            "size": "991643",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "164",
            "width": "190",
            "mp4_size": "73840",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "302",
            "width": "350",
            "size": "991643",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "232",
            "size": "476583",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "179480",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "188762",
            "webp": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "232",
            "size": "162938",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "77176",
            "webp": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "116",
            "size": "146997",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "59965",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "68240",
            "webp": "https://media1.giphy.com/media/MMQrQQ87G2MmY/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "116",
            "size": "7073",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "232",
            "size": "21351",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "173",
            "width": "200",
            "size": "360885",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "135564",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "144160",
            "webp": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "173",
            "width": "200",
            "size": "118075",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "58824",
            "webp": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "87",
            "width": "100",
            "size": "111453",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "47791",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "56336",
            "webp": "https://media1.giphy.com/media/MMQrQQ87G2MmY/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "87",
            "width": "100",
            "size": "5662",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "173",
            "width": "200",
            "size": "16281",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "4942996",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "302",
            "width": "350",
            "size": "45759",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "414",
            "width": "480",
            "mp4_size": "1030945",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "132",
            "width": "152",
            "mp4_size": "46962",
            "mp4": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "65",
            "width": "75",
            "size": "47686",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "94",
            "width": "108",
            "size": "29376",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "414",
            "width": "480",
            "size": "991643",
            "url": "https://media1.giphy.com/media/MMQrQQ87G2MmY/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPU1NUXJRUTg3RzJNbVkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU1NUXJRUTg3RzJNbVkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU1NUXJRUTg3RzJNbVkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU1NUXJRUTg3RzJNbVkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "13SogtMD6cSqas",
        "url": "https://giphy.com/gifs/13SogtMD6cSqas",
        "slug": "13SogtMD6cSqas",
        "bitly_gif_url": "http://gph.is/1uiXo0R",
        "bitly_url": "http://gph.is/1uiXo0R",
        "embed_url": "https://giphy.com/embed/13SogtMD6cSqas",
        "username": "",
        "source": "http://reddit.com/r/gifs/comments/2d8sja/cool_hip_dance/",
        "title": "3D Dancing GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "reddit.com",
        "source_post_url": "http://reddit.com/r/gifs/comments/2d8sja/cool_hip_dance/",
        "is_sticker": 0,
        "import_datetime": "2014-08-11 15:58:48",
        "trending_datetime": "2014-08-12 20:34:22",
        "images": {
          "original": {
            "height": "300",
            "width": "400",
            "size": "739035",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "464179",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "367524",
            "webp": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "126",
            "hash": "08e3a558e47d957c9b98df2bf4e767ab"
          },
          "downsized": {
            "height": "300",
            "width": "400",
            "size": "739035",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "300",
            "width": "400",
            "size": "739035",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "300",
            "width": "400",
            "size": "739035",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "212",
            "width": "282",
            "mp4_size": "89731",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "300",
            "width": "400",
            "size": "739035",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "588451",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "153386",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "203324",
            "webp": "https://media1.giphy.com/media/13SogtMD6cSqas/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "39654",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "27114",
            "webp": "https://media1.giphy.com/media/13SogtMD6cSqas/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "256267",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "66087",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "100204",
            "webp": "https://media1.giphy.com/media/13SogtMD6cSqas/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "4347",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "10783",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "393450",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "108203",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "150428",
            "webp": "https://media1.giphy.com/media/13SogtMD6cSqas/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "26562",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "19594",
            "webp": "https://media1.giphy.com/media/13SogtMD6cSqas/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "173347",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "48137",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "74428",
            "webp": "https://media1.giphy.com/media/13SogtMD6cSqas/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "3200",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "6211",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1242515",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "300",
            "width": "400",
            "size": "15868",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "464179",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "240",
            "width": "320",
            "mp4_size": "31937",
            "mp4": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "115",
            "width": "153",
            "size": "49273",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "198",
            "width": "264",
            "size": "43674",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "739035",
            "url": "https://media1.giphy.com/media/13SogtMD6cSqas/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTEzU29ndE1ENmNTcWFzJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEzU29ndE1ENmNTcWFzJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEzU29ndE1ENmNTcWFzJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTEzU29ndE1ENmNTcWFzJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9OGQwNGQ1ZDRxd2EyeWdxNnNhbnRuZGh4c2U3Y3FldGVqbTJmazJ3MXh6eDliZDQ5JmN0PWc&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "AActpIFHIuQTK",
        "url": "https://giphy.com/gifs/dancing-friends-weird-AActpIFHIuQTK",
        "slug": "dancing-friends-weird-AActpIFHIuQTK",
        "bitly_gif_url": "http://gph.is/28MYxLv",
        "bitly_url": "http://gph.is/28MYxLv",
        "embed_url": "https://giphy.com/embed/AActpIFHIuQTK",
        "username": "",
        "source": "http://funnycutegifs.com/post/36783671975/moar-gifs-here",
        "title": "Friends Tv Dancing GIF",
        "rating": "pg",
        "content_url": "",
        "source_tld": "funnycutegifs.com",
        "source_post_url": "http://funnycutegifs.com/post/36783671975/moar-gifs-here",
        "is_sticker": 0,
        "import_datetime": "2016-06-21 18:25:39",
        "trending_datetime": "2016-11-21 20:45:01",
        "images": {
          "original": {
            "height": "375",
            "width": "500",
            "size": "1005185",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "195996",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "383292",
            "webp": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "14",
            "hash": "f25300c4934af0f534215c7af85a7040"
          },
          "downsized": {
            "height": "375",
            "width": "500",
            "size": "1005185",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "375",
            "width": "500",
            "size": "1005185",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "375",
            "width": "500",
            "size": "1005185",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "332",
            "width": "443",
            "mp4_size": "52453",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "375",
            "width": "500",
            "size": "1005185",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "267",
            "size": "265200",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "47233",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "108298",
            "webp": "https://media1.giphy.com/media/AActpIFHIuQTK/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "267",
            "size": "101044",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "60092",
            "webp": "https://media1.giphy.com/media/AActpIFHIuQTK/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "134",
            "size": "86719",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "19956",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "44416",
            "webp": "https://media1.giphy.com/media/AActpIFHIuQTK/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "134",
            "size": "7949",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "267",
            "size": "23620",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "150",
            "width": "200",
            "size": "163336",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "32970",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "74974",
            "webp": "https://media1.giphy.com/media/AActpIFHIuQTK/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "150",
            "width": "200",
            "size": "61357",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "38280",
            "webp": "https://media1.giphy.com/media/AActpIFHIuQTK/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "75",
            "width": "100",
            "size": "56118",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "13524",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "30112",
            "webp": "https://media1.giphy.com/media/AActpIFHIuQTK/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "75",
            "width": "100",
            "size": "4799",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "150",
            "width": "200",
            "size": "13869",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1901673",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "375",
            "width": "500",
            "size": "81590",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "360",
            "width": "480",
            "mp4_size": "195996",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "166",
            "width": "221",
            "mp4_size": "19216",
            "mp4": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "62",
            "width": "83",
            "size": "49532",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "114",
            "width": "152",
            "size": "37250",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "360",
            "width": "480",
            "size": "1005185",
            "url": "https://media1.giphy.com/media/AActpIFHIuQTK/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPUFBY3RwSUZISXVRVEsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFBY3RwSUZISXVRVEsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFBY3RwSUZISXVRVEsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUFBY3RwSUZISXVRVEsmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "NZMCbl0xfTCjS",
        "url": "https://giphy.com/gifs/party-mom-shittyreactiongifs-NZMCbl0xfTCjS",
        "slug": "party-mom-shittyreactiongifs-NZMCbl0xfTCjS",
        "bitly_gif_url": "http://gph.is/1e7I7Zv",
        "bitly_url": "http://gph.is/1e7I7Zv",
        "embed_url": "https://giphy.com/embed/NZMCbl0xfTCjS",
        "username": "",
        "source": "http://www.reddit.com/r/shittyreactiongifs/comments/1lt8ow/when_my_mom_yells_at_me_for_buying_too_many_party/",
        "title": "weird old man GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/shittyreactiongifs/comments/1lt8ow/when_my_mom_yells_at_me_for_buying_too_many_party/",
        "is_sticker": 0,
        "import_datetime": "2013-09-09 03:58:59",
        "trending_datetime": "2015-11-08 14:16:26",
        "images": {
          "original": {
            "height": "286",
            "width": "449",
            "size": "1513651",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "1453430",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "1660084",
            "webp": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "96",
            "hash": "fcd154d273863e07090565ed26554177"
          },
          "downsized": {
            "height": "286",
            "width": "449",
            "size": "1513651",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "286",
            "width": "449",
            "size": "1513651",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "286",
            "width": "449",
            "size": "1513651",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "112",
            "width": "175",
            "mp4_size": "92760",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "286",
            "width": "449",
            "size": "1513651",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "314",
            "size": "1427077",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "514886",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "857478",
            "webp": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "314",
            "size": "93775",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "62858",
            "webp": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "157",
            "size": "459227",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "152781",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "302962",
            "webp": "https://media2.giphy.com/media/NZMCbl0xfTCjS/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "157",
            "size": "6899",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "314",
            "size": "21459",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "127",
            "width": "200",
            "size": "684161",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "216797",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "423290",
            "webp": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "127",
            "width": "200",
            "size": "44477",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "30078",
            "webp": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "64",
            "width": "100",
            "size": "226994",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "46637",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "153424",
            "webp": "https://media2.giphy.com/media/NZMCbl0xfTCjS/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "64",
            "width": "100",
            "size": "3687",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "127",
            "width": "200",
            "size": "10929",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2123900",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "286",
            "width": "449",
            "size": "20736",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "304",
            "width": "480",
            "mp4_size": "1453430",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "124",
            "width": "194",
            "mp4_size": "40904",
            "mp4": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "62",
            "width": "97",
            "size": "49437",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "96",
            "width": "150",
            "size": "35520",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "306",
            "width": "480",
            "size": "1513651",
            "url": "https://media2.giphy.com/media/NZMCbl0xfTCjS/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPU5aTUNibDB4ZlRDalMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU5aTUNibDB4ZlRDalMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU5aTUNibDB4ZlRDalMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPU5aTUNibDB4ZlRDalMmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3og0ITpdHjrDDH8Yy4",
        "url": "https://giphy.com/gifs/meme-annoyed-snow-white-3og0ITpdHjrDDH8Yy4",
        "slug": "meme-annoyed-snow-white-3og0ITpdHjrDDH8Yy4",
        "bitly_gif_url": "http://gph.is/2rwmnmy",
        "bitly_url": "http://gph.is/2rwmnmy",
        "embed_url": "https://giphy.com/embed/3og0ITpdHjrDDH8Yy4",
        "username": "",
        "source": "https://twitter.com/YAHshowYAH/status/866748604375060481",
        "title": "Over It Meme GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "twitter.com",
        "source_post_url": "https://twitter.com/YAHshowYAH/status/866748604375060481",
        "is_sticker": 0,
        "import_datetime": "2017-05-23 15:08:11",
        "trending_datetime": "2019-08-30 19:00:39",
        "images": {
          "original": {
            "height": "400",
            "width": "480",
            "size": "8506954",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "694490",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "2057838",
            "webp": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "74",
            "hash": "8b1e77fcc4d1072567bfe77799c0cbd0"
          },
          "downsized": {
            "height": "208",
            "width": "250",
            "size": "1802485",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "320",
            "width": "384",
            "size": "5146016",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-downsized-large.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-large.gif&ct=g"
          },
          "downsized_medium": {
            "height": "303",
            "width": "364",
            "size": "4635855",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-downsized-medium.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-medium.gif&ct=g"
          },
          "downsized_small": {
            "height": "212",
            "width": "254",
            "mp4_size": "148149",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "208",
            "width": "250",
            "size": "34903",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "240",
            "size": "2408866",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "270028",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "737098",
            "webp": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "240",
            "size": "198248",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "59718",
            "webp": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "120",
            "size": "668663",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "119886",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "266692",
            "webp": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "120",
            "size": "10205",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "240",
            "size": "32022",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "166",
            "width": "200",
            "size": "1734071",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "223513",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "577360",
            "webp": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "166",
            "width": "200",
            "size": "145279",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "47142",
            "webp": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "83",
            "width": "100",
            "size": "487138",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "48995",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "211548",
            "webp": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "83",
            "width": "100",
            "size": "7821",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "166",
            "width": "200",
            "size": "23903",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "2021598",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "400",
            "width": "480",
            "size": "104153",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "400",
            "width": "480",
            "mp4_size": "694490",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "226",
            "width": "271",
            "mp4_size": "37006",
            "mp4": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "79",
            "width": "95",
            "size": "48280",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "125",
            "width": "150",
            "size": "48462",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "400",
            "width": "480",
            "size": "8506954",
            "url": "https://media1.giphy.com/media/3og0ITpdHjrDDH8Yy4/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNvZzBJVHBkSGpyRERIOFl5NCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvZzBJVHBkSGpyRERIOFl5NCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvZzBJVHBkSGpyRERIOFl5NCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvZzBJVHBkSGpyRERIOFl5NCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "EehnUUCH2JcwU",
        "url": "https://giphy.com/gifs/reaction-EehnUUCH2JcwU",
        "slug": "reaction-EehnUUCH2JcwU",
        "bitly_gif_url": "http://gph.is/1quMX4A",
        "bitly_url": "http://gph.is/1quMX4A",
        "embed_url": "https://giphy.com/embed/EehnUUCH2JcwU",
        "username": "",
        "source": "http://www.reddit.com/r/reactiongifs/comments/2k9su3/mrw_the_bartender_makes_a_particularly_good_old/",
        "title": "Dog Reaction GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "http://www.reddit.com/r/reactiongifs/comments/2k9su3/mrw_the_bartender_makes_a_particularly_good_old/",
        "is_sticker": 0,
        "import_datetime": "2014-11-08 04:21:28",
        "trending_datetime": "2016-07-10 19:00:02",
        "images": {
          "original": {
            "height": "253",
            "width": "300",
            "size": "464672",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "199147",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "191848",
            "webp": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "58",
            "hash": "9d8eacb805c9222367ab002b31257ec2"
          },
          "downsized": {
            "height": "253",
            "width": "300",
            "size": "464672",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "253",
            "width": "300",
            "size": "464672",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "253",
            "width": "300",
            "size": "464672",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "252",
            "width": "300",
            "mp4_size": "102024",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "253",
            "width": "300",
            "size": "464672",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "237",
            "size": "370635",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "54110",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "135492",
            "webp": "https://media1.giphy.com/media/EehnUUCH2JcwU/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "237",
            "size": "73942",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "40436",
            "webp": "https://media1.giphy.com/media/EehnUUCH2JcwU/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "119",
            "size": "137504",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "21134",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "56024",
            "webp": "https://media1.giphy.com/media/EehnUUCH2JcwU/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "119",
            "size": "5027",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "237",
            "size": "12924",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "169",
            "width": "200",
            "size": "283297",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "42493",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "108748",
            "webp": "https://media1.giphy.com/media/EehnUUCH2JcwU/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "169",
            "width": "200",
            "size": "53800",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "32652",
            "webp": "https://media1.giphy.com/media/EehnUUCH2JcwU/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "85",
            "width": "100",
            "size": "105385",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "16297",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "44844",
            "webp": "https://media1.giphy.com/media/EehnUUCH2JcwU/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "85",
            "width": "100",
            "size": "4175",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "169",
            "width": "200",
            "size": "13870",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1074036",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "253",
            "width": "300",
            "size": "31015",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "404",
            "width": "480",
            "mp4_size": "199147",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "252",
            "width": "300",
            "mp4_size": "35132",
            "mp4": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "109",
            "width": "129",
            "size": "47773",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "216",
            "width": "256",
            "size": "46858",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "405",
            "width": "480",
            "size": "464672",
            "url": "https://media1.giphy.com/media/EehnUUCH2JcwU/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPUVlaG5VVUNIMkpjd1UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVlaG5VVUNIMkpjd1UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVlaG5VVUNIMkpjd1UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUVlaG5VVUNIMkpjd1UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "3oEjHCACoXye1k10GY",
        "url": "https://giphy.com/gifs/angry-frustrated-arthur-meme-3oEjHCACoXye1k10GY",
        "slug": "angry-frustrated-arthur-meme-3oEjHCACoXye1k10GY",
        "bitly_gif_url": "http://gph.is/2aA3FDB",
        "bitly_url": "http://gph.is/2aA3FDB",
        "embed_url": "https://giphy.com/embed/3oEjHCACoXye1k10GY",
        "username": "",
        "source": "https://twitter.com/JdAnderson13/status/758805637958557700",
        "title": "Angry Meme GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "twitter.com",
        "source_post_url": "https://twitter.com/JdAnderson13/status/758805637958557700",
        "is_sticker": 0,
        "import_datetime": "2016-07-29 01:06:17",
        "trending_datetime": "2021-03-31 23:00:14",
        "images": {
          "original": {
            "height": "270",
            "width": "480",
            "size": "225347",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "67062",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "75748",
            "webp": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "7",
            "hash": "b1e153e01e191d74eb457adf83371d67"
          },
          "downsized": {
            "height": "270",
            "width": "480",
            "size": "225347",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_large": {
            "height": "270",
            "width": "480",
            "size": "225347",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "270",
            "width": "480",
            "size": "225347",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "270",
            "width": "480",
            "mp4_size": "72619",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "270",
            "width": "480",
            "size": "225347",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "356",
            "size": "108381",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "31395",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "49842",
            "webp": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "356",
            "size": "95361",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "46798",
            "webp": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "178",
            "size": "36492",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "10308",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "21216",
            "webp": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "178",
            "size": "5894",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "356",
            "size": "16076",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "113",
            "width": "200",
            "size": "44026",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "11500",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "24350",
            "webp": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "113",
            "width": "200",
            "size": "37950",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "22430",
            "webp": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "15748",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "5051",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "10120",
            "webp": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "57",
            "width": "100",
            "size": "3028",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "113",
            "width": "200",
            "size": "7369",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "1050666",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "270",
            "width": "480",
            "size": "59946",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "270",
            "width": "480",
            "mp4_size": "67062",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "222",
            "width": "394",
            "mp4_size": "19918",
            "mp4": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "76",
            "width": "135",
            "size": "46188",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "198",
            "width": "352",
            "size": "49308",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "270",
            "width": "480",
            "size": "225347",
            "url": "https://media0.giphy.com/media/3oEjHCACoXye1k10GY/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPTNvRWpIQ0FDb1h5ZTFrMTBHWSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvRWpIQ0FDb1h5ZTFrMTBHWSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvRWpIQ0FDb1h5ZTFrMTBHWSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNvRWpIQ0FDb1h5ZTFrMTBHWSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPThkMDRkNWQ0cXdhMnlncTZzYW50bmRoeHNlN2NxZXRlam0yZmsydzF4eng5YmQ0OSZjdD1n&action_type=SENT"
          }
        }
      },
      {
        "type": "gif",
        "id": "zWzAudGgQ7JOE",
        "url": "https://giphy.com/gifs/someone-meme-mashup-zWzAudGgQ7JOE",
        "slug": "someone-meme-mashup-zWzAudGgQ7JOE",
        "bitly_gif_url": "http://gph.is/2nqnkbb",
        "bitly_url": "http://gph.is/2nqnkbb",
        "embed_url": "https://giphy.com/embed/zWzAudGgQ7JOE",
        "username": "",
        "source": "https://www.reddit.com/r/MRW/comments/5zfajk/mrw_someone_posts_a_shitty_meme_mashup/",
        "title": "random think about it GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "https://www.reddit.com/r/MRW/comments/5zfajk/mrw_someone_posts_a_shitty_meme_mashup/",
        "is_sticker": 0,
        "import_datetime": "2017-03-14 22:08:23",
        "trending_datetime": "2017-06-16 04:15:01",
        "images": {
          "original": {
            "height": "274",
            "width": "480",
            "size": "2011883",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g",
            "mp4_size": "40196",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g",
            "webp_size": "586898",
            "webp": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.webp&ct=g",
            "frames": "74",
            "hash": "0e1247c13b9e9d6485415981c75ad980"
          },
          "downsized": {
            "height": "274",
            "width": "480",
            "size": "1286011",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy-downsized.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized.gif&ct=g"
          },
          "downsized_large": {
            "height": "274",
            "width": "480",
            "size": "2011883",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_medium": {
            "height": "274",
            "width": "480",
            "size": "2011883",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.gif&ct=g"
          },
          "downsized_small": {
            "height": "274",
            "width": "480",
            "mp4_size": "56011",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy-downsized-small.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized-small.mp4&ct=g"
          },
          "downsized_still": {
            "height": "274",
            "width": "480",
            "size": "88981",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy-downsized_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-downsized_s.gif&ct=g"
          },
          "fixed_height": {
            "height": "200",
            "width": "350",
            "size": "1100367",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.gif&ct=g",
            "mp4_size": "18151",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.mp4&ct=g",
            "webp_size": "421488",
            "webp": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200.webp&ct=g"
          },
          "fixed_height_downsampled": {
            "height": "200",
            "width": "350",
            "size": "137916",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.gif&ct=g",
            "webp_size": "80396",
            "webp": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_d.webp&ct=g"
          },
          "fixed_height_small": {
            "height": "100",
            "width": "175",
            "size": "331904",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/100.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.gif&ct=g",
            "mp4_size": "7926",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/100.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.mp4&ct=g",
            "webp_size": "192930",
            "webp": "https://media2.giphy.com/media/zWzAudGgQ7JOE/100.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100.webp&ct=g"
          },
          "fixed_height_small_still": {
            "height": "100",
            "width": "175",
            "size": "14935",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/100_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100_s.gif&ct=g"
          },
          "fixed_height_still": {
            "height": "200",
            "width": "350",
            "size": "50726",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200_s.gif&ct=g"
          },
          "fixed_width": {
            "height": "114",
            "width": "200",
            "size": "372398",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.gif&ct=g",
            "mp4_size": "9729",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.mp4&ct=g",
            "webp_size": "207340",
            "webp": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w.webp&ct=g"
          },
          "fixed_width_downsampled": {
            "height": "114",
            "width": "200",
            "size": "48726",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200w_d.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.gif&ct=g",
            "webp_size": "33162",
            "webp": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200w_d.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_d.webp&ct=g"
          },
          "fixed_width_small": {
            "height": "57",
            "width": "100",
            "size": "137507",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/100w.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.gif&ct=g",
            "mp4_size": "5013",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/100w.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.mp4&ct=g",
            "webp_size": "90676",
            "webp": "https://media2.giphy.com/media/zWzAudGgQ7JOE/100w.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w.webp&ct=g"
          },
          "fixed_width_small_still": {
            "height": "57",
            "width": "100",
            "size": "6019",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/100w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=100w_s.gif&ct=g"
          },
          "fixed_width_still": {
            "height": "114",
            "width": "200",
            "size": "18416",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/200w_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=200w_s.gif&ct=g"
          },
          "looping": {
            "mp4_size": "268781",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy-loop.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-loop.mp4&ct=g"
          },
          "original_still": {
            "height": "274",
            "width": "480",
            "size": "95645",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy_s.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy_s.gif&ct=g"
          },
          "original_mp4": {
            "height": "274",
            "width": "480",
            "mp4_size": "40196",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy.mp4&ct=g"
          },
          "preview": {
            "height": "274",
            "width": "480",
            "mp4_size": "40015",
            "mp4": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy-preview.mp4?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.mp4&ct=g"
          },
          "preview_gif": {
            "height": "133",
            "width": "233",
            "size": "49552",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy-preview.gif?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.gif&ct=g"
          },
          "preview_webp": {
            "height": "174",
            "width": "305",
            "size": "47748",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/giphy-preview.webp?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=giphy-preview.webp&ct=g"
          },
          "480w_still": {
            "height": "274",
            "width": "480",
            "size": "2011883",
            "url": "https://media2.giphy.com/media/zWzAudGgQ7JOE/480w_s.jpg?cid=8d04d5d4qwa2ygq6santndhxse7cqetejm2fk2w1xzx9bd49&rid=480w_s.jpg&ct=g"
          }
        },
        "analytics_response_payload": "e=Z2lmX2lkPXpXekF1ZEdnUTdKT0UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw",
        "analytics": {
          "onload": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXpXekF1ZEdnUTdKT0UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SEEN"
          },
          "onclick": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXpXekF1ZEdnUTdKT0UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=CLICK"
          },
          "onsent": {
            "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXpXekF1ZEdnUTdKT0UmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD04ZDA0ZDVkNHF3YTJ5Z3E2c2FudG5kaHhzZTdjcWV0ZWptMmZrMncxeHp4OWJkNDkmY3Q9Zw&action_type=SENT"
          }
        }
      }
    ]

  return (
    
    <div className="content-container">
        <div className="grid-container">
            {data.map(x => {
                return (
                <div className="grid-item" key={x.id}> 
                    <img src={x.images.downsized_large.url} alt={x.slug} id={x.id} />
                </div>
                )})}
        </div>   
    </div>
  )
}
