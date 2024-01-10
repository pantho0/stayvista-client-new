import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "./RoomReservation";


const RoomDetails = () => {
  const rooms = useLoaderData()


  return (
    <Container>
      <Helmet>
        <title>{rooms?.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header rooms={rooms} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-20">
          <RoomInfo rooms={rooms} />
          <div className="order-first md:col-span-3 mb-10 md:order-last">
            <RoomReservation rooms={rooms}/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
