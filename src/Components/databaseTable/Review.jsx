import * as React from "react";
import "./Review.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdDomain } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";
import img from "../Images/user.png";
import { ImLocation } from "react-icons/im";

function Review({ setShowModal, showModal, data }) {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <div className="review-modal">
        <h2>Detailed Review</h2>
        <img src={img} alt="" className="user-image" />
        <h2>
          {data.first_name}
          {data.last_name}
        </h2>
        <div className="review-inf">
          <h4>Contact</h4>
          <p>
            <FaPhone /> Tel : {data.phone}{" "}
          </p>
          <p>
            <MdEmail /> Email : {data.email}
          </p>
        </div>
        <div className="review-inf">
          <h4>StartUp Details</h4>
          <p>
            <MdDomain />
            Sector :{" "}
          </p>
          <p>
            <HiUsers />
            Employees :
          </p>
          <p>
            <HiUser /> Co-Founder :{" "}
          </p>
          <p>
            <ImLocation />
            Location :{" "}
          </p>
        </div>
        <div className="review-inf">
          <h4>Previous Work with RedStart</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi pariatur magni corporis dolorum voluptates voluptate non quisquam! Molestiae minima nostrum, laudantium pariatur error velit, excepturi at atque possimus numquam eius, odio optio. Ab deserunt mollitia voluptate non, molestias aliquid labore expedita? Saepe iste ipsum quos obcaecati laboriosam laudantium, minima architecto veritatis quia rerum? Perspiciatis fugit reprehenderit consequuntur ipsum consectetur quasi necessitatibus, quod vel veniam rem beatae doloremque, nulla corporis odit. Quod beatae eos expedita vero esse. Neque sed at est explicabo harum dolores culpa animi aut a ut. Culpa animi voluptatibus omnis officia reprehenderit est unde porro, mollitia maiores inventore laborum autem aspernatur consequatur aperiam! Facilis nesciunt natus eius necessitatibus quis numquam ipsum, corrupti suscipit, illo odit autem fugit consequatur, reiciendis officia iusto debitis obcaecati perferendis ullam dolor aut eum! Eum delectus ratione ea, quisquam fuga et. Necessitatibus ipsa molestiae esse vel, aspernatur sequi enim quis pariatur numquam fugit ipsum obcaecati, nihil animi ratione aliquam voluptatibus dolorem autem asperiores ipsam voluptas quidem? Ullam voluptatem suscipit numquam ea, error culpa vitae doloribus ipsam earum atque quis nulla? Mollitia non eius rerum maiores explicabo minus minima, numquam tempore corporis id blanditiis ea possimus debitis voluptates dolor ipsa ipsum eum esse harum nihil nam distinctio repellendus cum consectetur. Dolorum, delectus doloremque! Dolor facilis, praesentium corporis perferendis enim ducimus esse, id tempora delectus sit atque explicabo iusto cumque inventore fuga tenetur alias obcaecati fugit commodi culpa tempore aspernatur maiores. Quae dolor aliquam aliquid minus ipsa! Nulla, reiciendis. Hic veritatis pariatur sapiente illo aperiam necessitatibus odit cumque dolor commodi. Cupiditate, commodi! Ut incidunt, odit a voluptatem aperiam beatae labore et quos. Amet fuga porro blanditiis nisi, molestiae quia expedita laboriosam in officiis, rerum labore culpa quo eum, voluptas reiciendis quisquam! Eos placeat repellat doloribus sapiente, dolores odit. Sed, recusandae! Illo a dolorem iusto corrupti? Rerum sit quia doloribus soluta, consequuntur optio perspiciatis veritatis facere assumenda sequi quae perferendis, sunt quibusdam omnis. Magnam, labore voluptatem nulla voluptatum impedit, ipsam at voluptate libero, id quas similique. Quis dolores molestiae quibusdam sunt porro enim quisquam ipsum beatae deleniti? Tempore, officia. Nemo nulla voluptate ullam aliquid amet doloremque hic recusandae explicabo rem blanditiis porro accusantium delectus iure, nihil vel reiciendis! Vel laudantium similique placeat voluptas impedit quibusdam omnis enim at modi, eius, odit consequatur provident optio quas sequi exercitationem. Cumque eligendi laudantium nihil, harum repudiandae pariatur ratione sapiente at quis, eum magnam aperiam? Sit cumque laboriosam minima nesciunt? Maiores est, ut consequatur aliquid nemo rerum quam, officiis deserunt quas totam optio delectus nesciunt porro mollitia, eius praesentium atque deleniti iusto eum voluptate? Quibusdam minus nesciunt esse fugit ipsum doloremque, distinctio sapiente possimus. Pariatur ab est minus odio iusto, voluptatibus, reiciendis facilis, assumenda excepturi quas itaque debitis! Qui porro, sapiente recusandae adipisci ad suscipit, veniam laborum est ullam perspiciatis laudantium! Earum, animi dolores. Est itaque quos deserunt ullam dolorum officiis natus hic tempora nihil architecto rerum eum eos soluta delectus quaerat consequuntur ipsum doloribus aliquid, voluptatem molestiae corporis modi! Soluta iusto, minima esse neque accusamus, beatae a adipisci, hic molestiae porro quisquam vel quod aliquam incidunt eaque maxime repellendus ipsum possimus et. Voluptas quam labore nesciunt perspiciatis necessitatibus laudantium sapiente! Vel aut excepturi laudantium perferendis voluptates! Voluptatibus, impedit repellendus voluptatem corporis saepe maxime quia temporibus dolore error dignissimos? Velit minus ullam repellat maiores libero, quidem officia eligendi at rem dolorum praesentium sint dignissimos! Sunt veritatis error fugiat perferendis asperiores deleniti dicta a saepe, iure ad repudiandae quidem, sit maxime aspernatur dolorem ea deserunt repellat sapiente. Obcaecati temporibus laborum repellat ipsum iste praesentium aliquam necessitatibus possimus ut nulla aspernatur, voluptas repellendus fugiat? Minima amet praesentium nihil dicta magnam molestiae in accusamus optio autem, voluptates nam repudiandae dolorem at. Velit sunt eveniet illum illo quaerat accusantium iste qui ullam in amet est necessitatibus possimus ab perspiciatis officiis nesciunt, maiores natus repudiandae aut culpa, molestias consequuntur! Expedita ad aliquam reiciendis soluta placeat dolores, eum dolorum, voluptas similique molestiae laboriosam impedit voluptatibus voluptatem molestias autem facilis laborum commodi error illum iste nemo vel pariatur repudiandae fuga. Quaerat aut quisquam, rem voluptate nulla harum neque ipsum ab, enim maiores, minima saepe? Id optio voluptatem perferendis sequi omnis vitae repudiandae unde velit magnam officia? Eius similique iste, placeat, quibusdam unde doloribus possimus enim rerum incidunt eos exercitationem voluptatibus? Dicta sapiente quis id aperiam autem distinctio quaerat qui facere ab pariatur sint, repellat fugit excepturi nostrum nisi vero nihil ullam perferendis dolore, dolorum veniam voluptate. Dolor repellendus laborum necessitatibus reprehenderit, similique enim odio neque minima animi et beatae libero saepe quidem voluptatibus quibusdam totam obcaecati id. Quos sint praesentium magnam qui. Incidunt unde earum atque reprehenderit labore enim, laudantium nesciunt consequatur beatae! Et dicta libero atque natus? Natus quaerat totam debitis illo perspiciatis obcaecati nam quidem quae? Vero sed repellendus illo sunt? Exercitationem soluta fugiat, nisi atque eaque tenetur eligendi, doloribus nihil vitae necessitatibus ab nulla fuga expedita dicta autem inventore? Cupiditate libero fugiat fugit mollitia consectetur, perspiciatis dolore nam earum tenetur quisquam accusantium dicta magni expedita dignissimos, laborum nemo! Autem architecto eos corporis error pariatur quaerat facilis doloremque sunt eius nobis illum, veniam aut in magnam hic, fuga dicta, voluptatum sit officiis ducimus ex corrupti! Accusamus repellendus commodi necessitatibus assumenda laborum sed reiciendis, placeat nobis. Iure id excepturi voluptatibus saepe sed et officia aspernatur eius expedita nesciunt asperiores adipisci, molestiae consequuntur tempore deleniti sunt eligendi consequatur? Accusantium consectetur repellat dolorem optio laudantium at neque quis in quam numquam minus aspernatur cupiditate accusamus error magni natus ducimus quos, illo consequatur ullam quibusdam excepturi, similique tempore? Amet consequuntur quia perferendis, alias atque, sapiente eius eaque minus nisi odit ratione! Unde, ullam iusto neque illum eaque dignissimos enim vitae minus. Rerum, expedita ab unde laudantium suscipit accusantium ratione officiis, ut sequi, dignissimos iure aliquam soluta laborum porro. Voluptatum, cupiditate exercitationem veritatis dolore illo quidem dicta nesciunt, cumque iusto vero laudantium animi. Veniam dolorem, soluta maxime quasi ipsa corporis architecto esse, molestias eum officiis praesentium pariatur, quos ipsam debitis. Provident debitis officiis, quam autem ipsa aperiam et rem ex porro hic illo pariatur magnam praesentium odit suscipit laboriosam reiciendis?
        </div>
        <button className="btn-Review" autoFocus onClick={handleClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
}

export default Review;
