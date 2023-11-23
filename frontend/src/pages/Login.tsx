import Card from "components/card";
import React, { useState } from "react";
import referee from "../assets/images/referee.png";
import refereeRed from "../assets/images/referee-red.png";
import soccerPlayer from "../assets/images/soccer-player.png";
import Login from "components/login";
import Register from "components/register";

enum PageModule {
  LOGIN = "login",
  REGISTER = "register",
}

export default function LoginView() {
  const [page, setPage] = useState(PageModule.LOGIN);
  const [wrongPassword, setWrongPassword] = useState(false);

  function togglePage() {
    const _page = page === PageModule.LOGIN ? PageModule.REGISTER : PageModule.LOGIN;
    setPage(_page);
  }

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Card className="col-12 col-md-5 bg-blue p-4">
          <div>
            <div className="w-100 d-flex justify-content-center mb-4">
              {page === PageModule.LOGIN && !wrongPassword && (
                <img src={referee} alt="" className="w-25" />
              )}
              {page === PageModule.LOGIN && wrongPassword && (
                <img src={refereeRed} alt="" className="w-25" />
              )}
              {page === PageModule.REGISTER && (
                <img src={soccerPlayer} alt="" className="w-25" />
              )}
            </div>
            {page === PageModule.LOGIN && <Login togglePage={togglePage} />}
            {page === PageModule.REGISTER && <Register togglePage={togglePage} />}
          </div>   
        </Card>
      </div>
    </div>
  );
}
