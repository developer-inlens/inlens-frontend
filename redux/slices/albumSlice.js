import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  albums: [
    {
      id: '1',
      count: 2,
      title: 'Munnar',
      color: '#ffcdd2',
      album_lifecycle: 'done',
      photos: [
        {
          id: 1,
          aspectRatio: 3 / 4,
          photo_thumb_base64:
            'UklGRswAAABXRUJQVlA4TL8AAAAvCcABAE1kRP9jEYMf/Q/hNrZtVVnvR+6fTBulRlp4IUP0IHMvgm0k201OwnsyCH//3dDBL0FDJC+mkW07OTwayGB/KVg6ZlCUgWKuRuWcIndfqfFq/wN74oHAz5AZXtaqagDwBwAAIAgzdf3AP3R8bLnPAACqKEBRgO7Xf3hbEBHY0kAg3kUPed73U03cVpWgdwMgjiqf7W79ZXnTHSCgIq6/SY4t0OpyJUPug/Efc3Se8mI+F8U7/V3duNdNNQA=',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F1_5.3MB.webp?alt=media&token=68eeb919-f6d9-45cc-a937-23a28cfbfe78',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F1_5.3MB.webp?alt=media&token=68eeb919-f6d9-45cc-a937-23a28cfbfe78',
        },
        {
          id: 2,
          aspectRatio: 1824 / 4000,
          photo_thumb_base64:
            'UklGRqoAAABXRUJQVlA4TJ4AAAAvCQABAE1kRP9jEYMR/Q/BNrJtJRd3iH6G/I9kFEBM/0W4O2TWB6NIkhT17jHzv/2r6jgFzMQ6kmxT82wncPNP6Rn/NiPyC/2XpHNJ/Lmxofn+nP2cYBTD71x/ITopoQCgAFRVASgFBU+vZTalFFQUBIKiKiigAeCPNLd0AAoJABAIigocAP50ra25npY6JPevjR/z/6ddR8L+e03y/Q==',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F2_3.3MB.webp?alt=media&token=5c266ebd-50fb-4b5c-ad06-adb1439d947d',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F2_3.3MB.webp?alt=media&token=5c266ebd-50fb-4b5c-ad06-adb1439d947d',
        },
        {
          id: 3,
          aspectRatio: 2560 / 1920,
          photo_thumb_base64:
            'UklGRiQBAABXRUJQVlA4TBcBAAAvCQADAAk1bRuw8OtuRP8D9BcxIAPS/3iB29i2VWX/jxM5sVsX9EEP1PhivIQzxPbdpQ3HtW21yjZnJTRACfZfDVNnOQvfVW3bqjLfw/1GOP1TEIEEjPOJu2sErDeXqtf/XqccVouGX62qRrKhPs9/LxzmNZxwGITD4MxB4v+vTpMKQOdCSAQOMHCYLS5Wr2EOCEHJuYRy6PRaEwDmwJF5JQdrOnr0rlBBBQZJSUf5tNGlNwVIGmnMhIDO5P02l8TUgASECmqJtgr7gZjXQDhnMBcA6afldg5OOOAAABwLlB6f0Qp4AxCSc+EEw/yvR7UTDM6FUJxw4HwA6IYH325/3Ekml2zfytqf9vdPx2b7toZ/cWta8woA',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F3_4.75MB_.webp?alt=media&token=63881f76-ce27-412a-8371-638015a0aaf5',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F3_4.75MB_.webp?alt=media&token=63881f76-ce27-412a-8371-638015a0aaf5',
        },
        {
          id: 4,
          aspectRatio: 1824 / 1368,
          photo_thumb_base64:
            'UklGRsgAAABXRUJQVlA4TLwAAAAvBgACAIkbHET0P1oMSByEv//BcFTb1pId3H3E7M3oYrmoQRQykEAD6O+Sw1Uk22rUYQYJkRL/Engl8H4FmNi2reTg7mTWT0yAxGz/tGie+QmXiDJskn8Q3OF1Hm0lV0vzar8XPAACAEjiZ3qOz14gRK/vyE9yJ3EJgBACkJ91VpuC+JluPQAUSeVNK0T8VALQj334cYynzoOtVyPGod+eDEX3TP9YCgWFFGm+aqbNsP2vU71v87ipE/3eAA==',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F4_4.74MB.webp?alt=media&token=1f2cab3d-d41c-4ffc-b18f-88c880bb05b1',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F4_4.74MB.webp?alt=media&token=1f2cab3d-d41c-4ffc-b18f-88c880bb05b1',
        },
        {
          id: 5,
          aspectRatio: 3648 / 2736,
          photo_thumb_base64:
            'UklGRrIAAABXRUJQVlA4TKUAAAAvBgACAE1kRP9jEQMf/Q/htrZtJboZLiW8mFZpihY8dnd3mOmCcSNJTgrvyT88QuB3HlhHtpXmAHG3Aui/Kv7j7klMgN7X9/AzTUzl0mrm9XLYNqmzfAAEog2m+/93fAAfoIkBzGY9A3/A/9tEM79/e/RYqIZ7k8m+qugNeLM9ekD3P1WOCT5UA+A/lF/VNwdQDZD99Xck1/Wdoyc4TBAD8Yz30d0A',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F5_4.96MB.webp?alt=media&token=b07c7de8-1a49-436e-80de-e6ffc146571f',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F5_4.96MB.webp?alt=media&token=b07c7de8-1a49-436e-80de-e6ffc146571f',
        },
        {
          id: 6,
          aspectRatio: 3649 / 2736,
          photo_thumb_base64:
            'UklGRrwAAABXRUJQVlA4TK8AAAAvBgACAE1kRP9jETEC/Q/htrZtJTpI6BC65pTwC6MYSiGHIl6IZTY+dbiqbVupJs4nEU4W+ldwCGDPlXEk2UrmOw4hvPyT4t9x10NEt7ZrkZDZwG+831fqrtQ4qcUsGgAAiX0kCgiok6cERLdu/AUgG3mIZ8bsnO/VmhxqjAOEtNs850FdA1Bj7ANCBGZ3HbsSgBwEwNzu6QgASJCPAKvZmr8L38tJP8v879+Z3/cDAA==',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F6_4.83MB.webp?alt=media&token=e80dae2b-1ec7-4960-9a73-391fce65fc6b',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F6_4.83MB.webp?alt=media&token=e80dae2b-1ec7-4960-9a73-391fce65fc6b',
        },
        {
          id: 7,
          aspectRatio: 3650 / 2736,
          photo_thumb_base64:
            'UklGRswAAABXRUJQVlA4TL8AAAAvBgACAIXjAACIaKfaoGcT9LNt62wbP9salWEAAGUyt/3/opEdA0mSDK3//7Lds23biOh/FHl3QlVLtDVU/OH2Ket8FrEuVjJvLHXCqwMa7q0dkyrc/L7yiiqSZN0H2XiWZZLw3ReCF2aHBMnS8o3TykbxjJM+5sTIQbbGv/T7RLIr8uujXx6bEJmsFzsi9CDGQBqgp4LfjKmPVgYgBE3w8mZw3WbEK81n0D8ffUY7g3TF5Uvq7/U36M8CfMUOAAA=',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F7_4.15MB.webp?alt=media&token=f899f0c5-7528-499f-ac02-f1d2335e9b94',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F7_4.15MB.webp?alt=media&token=f899f0c5-7528-499f-ac02-f1d2335e9b94',
        },
        {
          id: 8,
          aspectRatio: 2752 / 5664,
          photo_thumb_base64:
            'UklGRvIAAABXRUJQVlA4TOUAAAAvDYABAIk2RPQ/FjEgBel/JHEb27aqnP8/Hr0htlsUVVEIdbh7ROru7tDGiW6EOIwk27Tm2bZP/km9m8LTN9zGtq0q+/sP3YVL6P2HdEABeinA3Sfi+Wemk/iatTWJjY+oa9x+Tkm7hj+D4Le8/r72z3pjPH6/m/43HAFJhQgCgA4qCKk828e4BoBACJQdpINSgXaYXXV6m0+KKBRJkY8SAg2AwP3YyW2xAXD8UUmqKDrC33yrtWaQ+iHZQTsABAo+i1M2brdfd6SnO6vc1//RlrfD4Fn9RZ+Gzn6rmd+CbeB6bvc7AA==',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_8.webp?alt=media&token=244648ef-e20a-4bab-9622-6d30c3f41dc5',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_8.webp?alt=media&token=244648ef-e20a-4bab-9622-6d30c3f41dc5',
        },
        {
          id: 9,
          aspectRatio: 2753 / 5664,
          photo_thumb_base64:
            'UklGRtQAAABXRUJQVlA4TMcAAAAvDYABAE1kRP9jERH9D4ejSLZV53yGoAFWEuexgDu8DsLMUTFv9dhIkq1k/sedjPRx/yu55S/ChUEjSYr6npkUbN6/nBeweQHMHEWYE+k3LoLQ/BG/fgQf0E+IuWE+H5lhtiUCugCABjURA8L3GW1RF5UUTUUKgIGHTXnforPJ0AQQyr9oQAyPkL170kUxFJwGJGDIlqJ0/sBtQIP6Aeok4rFBpGwpLpk5sgdH18hppHdf29ftxXXVqpaT9YdNHawk4Zt///YHAA==',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_9.webp?alt=media&token=658f6840-73d4-4205-a08f-bc85b22bce39',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_9.webp?alt=media&token=658f6840-73d4-4205-a08f-bc85b22bce39',
        },
        {
          id: 10,
          aspectRatio: 4248 / 5664,
          photo_thumb_base64:
            'UklGRjABAABXRUJQVlA4TCQBAAAvDYACAE2ISVPMfI3ofxyLiOh/AHZt26qahbvD/8b60MKohPFq4BeSnDFSQFrYcXf3NmBFtu0qanKGK2FX8Y1/E4g4Esh55rqNbVtVFu4SEt5SKJ1S7pB6+P1G7H8XH/8Gk+Hzt7oZTJs+H3etbjEfinyQIcuFOu2TS0JSnJB0cUQJAoBmt3o0JJKYlIcTJwCWiaQEgbkx6redFKQIVClAstkglgTr3n8s5oAAkLRACkBOCHZv3fm0BTPBQEgIIoLggcJq03tthRGBUaiATn8hmrzM1o/bQYJKx8MJuBiw6wM0TSqzfnC8kYfD7qoEgpOHhoZCSHSfz/z+TdICAIAGAAD/3G1xcHgxOBWGlZr0mV6Ypf5m/z9ZVf5NhYGM+uuz32EB',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_10.webp?alt=media&token=c314a013-21ff-49a2-bcac-30a2a022e4fc',
          url: 'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_10.webp?alt=media&token=c314a013-21ff-49a2-bcac-30a2a022e4fc',
        },
        // {
        //   id: 11,
        //   aspectRatio: 5664 / 2752,
        //   photo_thumb_base64:
        //     'UklGRvoAAABXRUJQVlA4TO0AAAAvBkADAIkeRPQ/FgMSBel/BLexbavK/i64O5z+q/gZBRCRfY9wd9pwHUm2qvQT3OHPTyjkH8WzAHAXN5Jsq0p/3F0y6ubsPyD7O8Ezd4eI1b0dJL9N+hlm/1n+4PsvL71W6wnAATBV+b39/MsUhUe3BeDnn8c/gRhCEz6+P//kD1EAAaZ3ci1CXIQKcOD7SJanZlygQCEOzcNh96+eF5c4gIj3M4T9PG+TjaBAgFiaP+eNz08iijSWYoZZJVvvTGKzGEUIFRrt4aI3lgCQgMeu3B+NCLGZhIJEc1awlqdJu/y9tZnt/q/n7XFdN1MA',
        //   photo_semi_quality:
        //     'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_11.webp?alt=media&token=ffa31dda-fde9-4871-9817-f766892a6b85',
        // },
        // {
        //   id: 12,
        //   aspectRatio: 2448 / 3264,
        //   photo_thumb_base64:
        //     'UklGRp4AAABXRUJQVlA4TJIAAAAvB0ABAIkqRPQ/FgWJgvQ/wDSybSdHfXIGyzxNh3Tzq0C/Up7E5eA+bbBtJElR3z2z9/bkH9UF8Mz8rCJJatWkLwoP+FeFB16OEecXzj/8XyzsGwiZ/Z35wbIeCk9XGAzA/WVugsAYKgB4Z1/rUDeBOQAIVMbgnsoJTBBhIEhxn6E6kvxsy/Ut3y3+vyv3Q1jPAA==',
        //   photo_semi_quality:
        //     'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_13.webp?alt=media&token=a0005dbb-0cd8-4e55-b621-c9c5b56bd47f',
        // },
        // {
        //   id: 13,
        //   aspectRatio: 2752 / 5664,
        //   photo_thumb_base64:
        //     'UklGRu4AAABXRUJQVlA4TOEAAAAvDYABAE1cgCGi/+EiIvofBqexbbvK/uRsURkKoQk8nfIkCpnTUeAYXM5QxPlMJElSVMfM7tT8/1WjzjHzua1t27TWs4349F/FUxEvdPZt/8iDZbweHeP3Mv+ZTx297H61b33vn5owfiuDLkrK/CX+/+nVANtiCALwd/214RgGxQGRAtIEAWAQw6F43ha3LYilSKSnDBTgCAwgoPi2agXviECOZBBIBEUAINKkArwv0mK4zR0HGGwDAsMQS2hCpdk8eF8srnlSSKzC+SmtXqI2atZjfHbV1m1UZdZcJ6b1sHoA',
        //   photo_semi_quality:
        //     'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_13.webp?alt=media&token=a0005dbb-0cd8-4e55-b621-c9c5b56bd47f',
        // },
        // {
        //   id: 14,
        //   aspectRatio: 1588 / 3264,
        //   photo_thumb_base64:
        //     'UklGRoQAAABXRUJQVlA4THgAAAAvB8AAAAWTAADTFB0qPjPLJ2BKNDd5jKWokSRls/9jAeffHuPMsY1kq80QeQ8xGUP/ZbgU5L3UgQrof/zQ3zPXdS+khbGUBsbAnoQ7yfz5IqjfJm5elRDWiEoCu7LTXJ70HZy/fACDDXms09a5uTKb0C+WNcfC5AA=',
        //   photo_semi_quality:
        //     'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_14.webp?alt=media&token=07cc969c-ec52-40d0-a067-7b39e5de8870',
        // },
      ],
      participants: [
        {
          id: '1',
          name: 'Athul Krishna',
        },
        {
          id: '2',
          name: 'Fahad C',
        },
        {id: '3', name: 'Jazzeu DM'},
        {id: '4', name: 'Uzmain Kabir'},
        {id: '5', name: 'Elson Jose'},
        {id: '6', name: 'Khalid'},
      ],
    },
    {
      id: '2',
      count: 2,
      title: 'Idukki',
      color: '#bbdefb',
      album_lifecycle: 'done',
      photos: [],
      participants: [
        {
          id: '1',
          name: 'Athul Krishna',
        },
        {
          id: '2',
          name: 'Fahad C',
        },
      ],
    },
    {
      id: '3',
      count: 2,
      title: 'Elson Marriage',
      color: '#c8e6c9',
      album_lifecycle: 'active',
      photos: [
        {
          id: 10,
          aspectRatio: 4248 / 5664,
          photo_thumb_base64:
            'UklGRjABAABXRUJQVlA4TCQBAAAvDYACAE2ISVPMfI3ofxyLiOh/AHZt26qahbvD/8b60MKohPFq4BeSnDFSQFrYcXf3NmBFtu0qanKGK2FX8Y1/E4g4Esh55rqNbVtVFu4SEt5SKJ1S7pB6+P1G7H8XH/8Gk+Hzt7oZTJs+H3etbjEfinyQIcuFOu2TS0JSnJB0cUQJAoBmt3o0JJKYlIcTJwCWiaQEgbkx6redFKQIVClAstkglgTr3n8s5oAAkLRACkBOCHZv3fm0BTPBQEgIIoLggcJq03tthRGBUaiATn8hmrzM1o/bQYJKx8MJuBiw6wM0TSqzfnC8kYfD7qoEgpOHhoZCSHSfz/z+TdICAIAGAAD/3G1xcHgxOBWGlZr0mV6Ypf5m/z9ZVf5NhYGM+uuz32EB',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_10.webp?alt=media&token=c314a013-21ff-49a2-bcac-30a2a022e4fc',
        },
        {
          id: 11,
          aspectRatio: 5664 / 2752,
          photo_thumb_base64:
            'UklGRvoAAABXRUJQVlA4TO0AAAAvBkADAIkeRPQ/FgMSBel/BLexbavK/i64O5z+q/gZBRCRfY9wd9pwHUm2qvQT3OHPTyjkH8WzAHAXN5Jsq0p/3F0y6ubsPyD7O8Ezd4eI1b0dJL9N+hlm/1n+4PsvL71W6wnAATBV+b39/MsUhUe3BeDnn8c/gRhCEz6+P//kD1EAAaZ3ci1CXIQKcOD7SJanZlygQCEOzcNh96+eF5c4gIj3M4T9PG+TjaBAgFiaP+eNz08iijSWYoZZJVvvTGKzGEUIFRrt4aI3lgCQgMeu3B+NCLGZhIJEc1awlqdJu/y9tZnt/q/n7XFdN1MA',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_11.webp?alt=media&token=ffa31dda-fde9-4871-9817-f766892a6b85',
        },
        {
          id: 12,
          aspectRatio: 2448 / 3264,
          photo_thumb_base64:
            'UklGRp4AAABXRUJQVlA4TJIAAAAvB0ABAIkqRPQ/FgWJgvQ/wDSybSdHfXIGyzxNh3Tzq0C/Up7E5eA+bbBtJElR3z2z9/bkH9UF8Mz8rCJJatWkLwoP+FeFB16OEecXzj/8XyzsGwiZ/Z35wbIeCk9XGAzA/WVugsAYKgB4Z1/rUDeBOQAIVMbgnsoJTBBhIEhxn6E6kvxsy/Ut3y3+vyv3Q1jPAA==',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_13.webp?alt=media&token=a0005dbb-0cd8-4e55-b621-c9c5b56bd47f',
        },
        {
          id: 13,
          aspectRatio: 2752 / 5664,
          photo_thumb_base64:
            'UklGRu4AAABXRUJQVlA4TOEAAAAvDYABAE1cgCGi/+EiIvofBqexbbvK/uRsURkKoQk8nfIkCpnTUeAYXM5QxPlMJElSVMfM7tT8/1WjzjHzua1t27TWs4349F/FUxEvdPZt/8iDZbweHeP3Mv+ZTx297H61b33vn5owfiuDLkrK/CX+/+nVANtiCALwd/214RgGxQGRAtIEAWAQw6F43ha3LYilSKSnDBTgCAwgoPi2agXviECOZBBIBEUAINKkArwv0mK4zR0HGGwDAsMQS2hCpdk8eF8srnlSSKzC+SmtXqI2atZjfHbV1m1UZdZcJ6b1sHoA',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_13.webp?alt=media&token=a0005dbb-0cd8-4e55-b621-c9c5b56bd47f',
        },
        {
          id: 14,
          aspectRatio: 1588 / 3264,
          photo_thumb_base64:
            'UklGRoQAAABXRUJQVlA4THgAAAAvB8AAAAWTAADTFB0qPjPLJ2BKNDd5jKWokSRls/9jAeffHuPMsY1kq80QeQ8xGUP/ZbgU5L3UgQrof/zQ3zPXdS+khbGUBsbAnoQ7yfz5IqjfJm5elRDWiEoCu7LTXJ70HZy/fACDDXms09a5uTKb0C+WNcfC5AA=',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2FIMG_14.webp?alt=media&token=07cc969c-ec52-40d0-a067-7b39e5de8870',
        },
      ],
      participants: [
        {
          id: '1',
          name: 'Athul Krishna',
        },
        {
          id: '2',
          name: 'Fahad C',
        },
        {id: '4', name: 'Uzmain Kabir'},
        {id: '5', name: 'Elson Jose'},
      ],
    },
    {
      id: '4',
      count: 2,
      title: 'Fahad Engagement',
      color: '#ffccbc',
      album_lifecycle: 'active',
      photos: [
        {
          id: 4,
          aspectRatio: 1824 / 1368,
          photo_thumb_base64:
            'UklGRsgAAABXRUJQVlA4TLwAAAAvBgACAIkbHET0P1oMSByEv//BcFTb1pId3H3E7M3oYrmoQRQykEAD6O+Sw1Uk22rUYQYJkRL/Engl8H4FmNi2reTg7mTWT0yAxGz/tGie+QmXiDJskn8Q3OF1Hm0lV0vzar8XPAACAEjiZ3qOz14gRK/vyE9yJ3EJgBACkJ91VpuC+JluPQAUSeVNK0T8VALQj334cYynzoOtVyPGod+eDEX3TP9YCgWFFGm+aqbNsP2vU71v87ipE/3eAA==',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F4_4.74MB.webp?alt=media&token=1f2cab3d-d41c-4ffc-b18f-88c880bb05b1',
        },
        {
          id: 5,
          aspectRatio: 3648 / 2736,
          photo_thumb_base64:
            'UklGRrIAAABXRUJQVlA4TKUAAAAvBgACAE1kRP9jEQMf/Q/htrZtJboZLiW8mFZpihY8dnd3mOmCcSNJTgrvyT88QuB3HlhHtpXmAHG3Aui/Kv7j7klMgN7X9/AzTUzl0mrm9XLYNqmzfAAEog2m+/93fAAfoIkBzGY9A3/A/9tEM79/e/RYqIZ7k8m+qugNeLM9ekD3P1WOCT5UA+A/lF/VNwdQDZD99Xck1/Wdoyc4TBAD8Yz30d0A',

          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F5_4.96MB.webp?alt=media&token=b07c7de8-1a49-436e-80de-e6ffc146571f',
        },
      ],
      participants: [
        {
          id: '1',
          name: 'Athul Krishna',
        },
        {
          id: '2',
          name: 'Fahad C',
        },
        {id: '3', name: 'Jazzeu DM'},
        {id: '5', name: 'Elson Jose'},
        {id: '6', name: 'Khalid'},
      ],
    },
    {
      id: '5',
      count: 2,
      title: 'Theyyam',
      color: '#d1c4e9',
      album_lifecycle: 'time_over',
      photos: [
        {
          id: 1,
          aspectRatio: 3 / 4,
          photo_thumb_base64:
            'UklGRswAAABXRUJQVlA4TL8AAAAvCcABAE1kRP9jEYMf/Q/hNrZtVVnvR+6fTBulRlp4IUP0IHMvgm0k201OwnsyCH//3dDBL0FDJC+mkW07OTwayGB/KVg6ZlCUgWKuRuWcIndfqfFq/wN74oHAz5AZXtaqagDwBwAAIAgzdf3AP3R8bLnPAACqKEBRgO7Xf3hbEBHY0kAg3kUPed73U03cVpWgdwMgjiqf7W79ZXnTHSCgIq6/SY4t0OpyJUPug/Efc3Se8mI+F8U7/V3duNdNNQA=',
          photo_semi_quality:
            'https://firebasestorage.googleapis.com/v0/b/fir-5c768.appspot.com/o/Recycler_view%2F1_5.3MB.webp?alt=media&token=68eeb919-f6d9-45cc-a937-23a28cfbfe78',
        },
      ],
      participants: [
        {
          id: '1',
          name: 'Athul Krishna',
        },
        {
          id: '2',
          name: 'Fahad C',
        },
        {id: '3', name: 'Jazzeu DM'},
        {id: '4', name: 'Uzmain Kabir'},
        {id: '5', name: 'Elson Jose'},
        {id: '6', name: 'Khalid'},
      ],
    },
    {
      id: '6',
      count: 2,
      title: 'Kerala Piravi',
      color: '#bbdefb',
      album_lifecycle: 'active',
      participants: [
        {
          id: '1',
          name: 'Athul Krishna',
        },
        {
          id: '2',
          name: 'Fahad C',
        },
        {id: '3', name: 'Jazzeu DM'},
        {id: '4', name: 'Uzmain Kabir'},
        {id: '5', name: 'Elson Jose'},
        {id: '6', name: 'Khalid'},
      ],
    },
  ],
  currentAlbumPhotos: [],
}

export const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    createAlbum: (state, action) => {
      state.albums.unshift(action.payload)
    },
    addPhoto: (state, action) => {
      state.albums[
        state.albums.findIndex(item => item.id === action.payload.id)
      ].photos.unshift(action.payload.photo)
    },
    // setCuurentAlbumPhotos:(state,action)=>{
    //   state.currentAlbumPhotos=
    // },
    fetchMorePhotos: (state, action) => {
      state.albums[
        state.albums.findIndex(item => item.id === action.payload.id)
      ].photos.push(...action.payload.photo)
    },
  },
})

export const {createAlbum, addPhoto, fetchMorePhotos} = albumSlice.actions

export default albumSlice.reducer
