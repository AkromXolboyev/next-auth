import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth";
export default async function Home() {
  const data = await getServerSession(authOptions);
  console.log(data);

  return (
    <div className="mx-auto container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita
      quisquam laborum iste a natus provident suscipit deserunt nulla quidem
      harum esse debitis mollitia assumenda amet placeat atque, vel nihil
      facilis voluptate corporis sapiente illo tenetur nobis. Amet nam nisi
      nulla? Molestias aperiam praesentium tempora quia? Similique illo
      provident ducimus dicta vel iste, itaque eum culpa esse possimus
      perferendis ratione tenetur hic totam! Architecto iste, minima molestias
      veritatis voluptatibus consequatur magni quam quia error officiis corrupti
      non sint accusantium, consequuntur ipsum expedita quisquam ratione
      laborum! Eos, soluta ex ullam tempora dolorum, totam cupiditate, dolore id
      vero sit nostrum iusto? Consequatur sunt quisquam id quis debitis culpa
      ipsum sit iure non beatae nisi velit reprehenderit nihil, nesciunt
      delectus similique quos veritatis placeat adipisci! Exercitationem quaerat
      voluptatibus blanditiis architecto enim minus minima iusto, explicabo
      magni neque quasi eius? Ex, nostrum suscipit. Optio quos consequuntur
      animi porro quia dolorem nostrum officia hic minus deserunt voluptatum
      molestiae dolores explicabo exercitationem facere, qui enim sapiente rerum
      eveniet provident inventore possimus atque. Velit eligendi fuga ab nemo
      atque ex explicabo vitae rerum? Magnam itaque qui at vitae, rem harum
      expedita minus nemo consequatur debitis porro voluptate nihil iure? Quia
      possimus omnis eius, expedita facilis nisi voluptatem.
    </div>
  );
}
