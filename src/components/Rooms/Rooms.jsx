import { useEffect, useState } from "react";
import Cards from "./Cards";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false)
  const category = params.get("category");
  useEffect(() => {
    setLoading(true)
    fetch("https://raw.githubusercontent.com/shakilahmedatik/stay-vista-resources/main/data/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else setRooms(data);
        setLoading(false)
      });
  }, [category]);
  if(loading) return <Loader/>
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {rooms.map((room) => (
            <Cards key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title={"No Rooms Available In This Category"}
            subtitle={"Please Browse Another Category"}
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
