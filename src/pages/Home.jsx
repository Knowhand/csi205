import photo from "../assets/IMG_0045.jpg";
const Home = () => {
  return (
    <div
      className="w-100 h-auto bg-white rounded-4"
      style={{ boxShadow: "0 5px 5px #000000ff" }}
    >
      <div>
        <h1 className="text-center mb-5" style={{ color: "#000000ff" }}>
          About me
        </h1>
        <p className="text-center pb-5" style={{ color: "#000000ff" }}>
          
          <b>ชื่อ-นามสกุล:</b> นายภีมวิชญ์ พุ่มน้อย <br />
          <b>ชื่อเล่น:</b> ภีม <br />
          <b>ปัจจุบันศึกษาที่:</b> มหาวิทยาลัยศรีปทุม <br />
          <b>คณะ:</b> เทคโนโลยีสารสนเทศ <br />
          <b>สาขา:</b> วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ <br />
          <b>ชั้นปีที่:</b> 2 <br />
          <b>รหัสนักศึกษา:</b> 67167533 <br />
          <b>งานอดิเรก:</b> ฟังเพลง, เล่นเกม <br />
          <b>ความสามารถพิเศษ:</b> มีความรู้เกี่ยวกับภาษาอังกฤษระดับนึง <br />
          <b>เป้าหมายในอนาคต:</b> อยากมีงานทำ <br />
          <b>สิ่งที่ชอบ:</b> ชอบกินของอร่อย, ชอบเล่นเกมกับเพื่อน, ชอบเที่ยว,
          ชอบกลางคืน <br />
          <b>สิ่งที่ไม่ชอบ:</b> งู, คนโกหก, แมลงหลายขา, ยุง <br />
        </p>
      </div>
      <hr className="w-75 mx-auto opacity-100" style={{ color: "#000000ff" }} />
      <div className="d-flex justify-content-center align-items-center gap-5 py-5">
        <div
          className="text"
          style={{ lineHeight: "25px", color: "#4e4d4dff" }}
        >
          <p className="fs-1 fw-semibold">
            Sup! Pheem Here <br />
            <span className="fs-4 fw-medium">Developer</span> <br />
            <span className="fs-5 fw-normal">Sripathum University</span>
          </p>
        </div>
        <div
          className="rounded-5 overflow-hidden"
          style={{
            width: "30rem",
            height: "30rem",
            boxShadow: "7px -3px 0px #000000ff, 3px 3px 0px #4b4949ff",
          }}
        >
          <img
            className="w-100 h-100 object-fit-cover"
            src={photo}
            alt="Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
