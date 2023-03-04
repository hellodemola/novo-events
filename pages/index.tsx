import type { NextPage } from 'next';
import { EventForm } from '../component/forms';

const Home: NextPage = () => (
  <div className="p-4 flex-col items-center flex border">

    <div className="flex justify-center text-center">
      <div>
        <div className="justify-center flex">
          <img
            src="/novo_nordisk_icon.png"
            alt="novo_nordisk_logo"
            width="100em"
          />
        </div>

      </div>
    </div>
    <div className="lg:w-2/6 py-8 px-4">
      {/* label */}
      <h1 className="text-xl text-[500]">Attendance form</h1>
      <p className="font-gray">Enter your details to register for this event.</p>
      <div className="my-5">
        <EventForm />
      </div>
    </div>

  </div>
);

export default Home;
