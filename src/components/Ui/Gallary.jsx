import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    {
      id: 1,
      imageUrl:
        "https://img.freepik.com/premium-photo/happy-volunteers-are-holding-sign-showing-messages_107420-41588.jpg?w=900",
    },
    {
      id: 2,
      imageUrl:
        "https://img.freepik.com/free-photo/hands-holding-donation-box-with-provisions_23-2148733814.jpg?w=900&t=st=1711170266~exp=1711170866~hmac=5e20aebd3d477cc238f99270123c5b19f47695b437c13846a2363d28c2e4e4e7",
    },
    {
      id: 3,
      imageUrl:
        "https://img.freepik.com/free-photo/damaged-car-russian-s-war-ukraine_23-2149437943.jpg?w=900&t=st=1711170367~exp=1711170967~hmac=6ef14c763a278b022b9bd9fe70422ef769807d7a09a6dc347dfab8b4578c536a",
    },
    {
      id: 4,
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/01/80/09/80/1000_F_180098018_06AUp5MYXQJJsMiwxOLT1ZruSpqhUaZL.jpg",
    },
    {
      id: 5,
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/06/41/12/98/1000_F_641129819_l0iqEWBYI8JE2aHmEU5ur4z3dyNzRxmI.jpg",
    },
    {
      id: 6,
      imageUrl:
        "https://img.freepik.com/free-photo/high-angle-kid-s-toy-russian-s-war-ukraine_23-2149437952.jpg?w=900&t=st=1711170510~exp=1711171110~hmac=17908a92a8a4a37b33cbfb18071178397a0c248438d600b99f037ef5feae6f9f",
    },
    {
      id: 7,
      imageUrl:
        "https://img.freepik.com/free-photo/people-world-environment-day-protest-with-placards_23-2149571852.jpg?w=900&t=st=1711170551~exp=1711171151~hmac=e53dabcb6fa9a787a26f53b5bac78a8165c9022efdb2cbd01f90e00e35a4334d",
    },
    {
      id: 8,
      imageUrl:
        "https://img.freepik.com/premium-photo/people-protesting-world-environment-day_52683-90484.jpg?w=900",
    },
    {
      id: 9,
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/06/41/13/02/1000_F_641130256_oQzKfLGQzVyvjl5CszFWhEnImVL5QN8H.jpg",
    },
    {
      id: 10,
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/01/34/96/93/1000_F_134969333_soaPwXc8ZjTlf5Agzx1mZl87gSIZbcrK.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-semibold mb-4">OUR WORKS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={image.imageUrl}
              alt={`Image ${image.id}`}
              className="w-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
