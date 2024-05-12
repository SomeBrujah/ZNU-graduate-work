import React from "react";

export default function Sidebar({
  me,
  allUsers,
  clients,
  setTarget,
}: {
  me: string;
  allUsers: string[];
  clients: string[];
  setTarget: (target: string) => void;
}) {
  
  return (
    <>
      <div className="flex-none border-r-2 border-gray-200 w-20 md:w-64">
        <div className="flex sm:items-center justify-between py-10 px-5">
          <div className="items-center">
            <p
              className="w-8 rounded-full text-2xl"
            >{me}'s</p>
            <div className="text-2xl invisible md:visible">
              <span className="text-gray-700 mr-3 font-bold">Chats</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-2">
          <div className="flex flex-col">
            {allUsers.length > 0 && allUsers.map((user, key, allUserList) => (
              <div key={key}>
                <button
                  className="flex items-center p-3 bg-white rounded-xl"
                  onClick={() => setTarget(user)}
                >
                  <h1 
                  className="w-4 sm:w-8 h-10 sm:h-8 rounded-full font-medium text-xl"
                  style={{
                    border: "1px solid #110e175c",
                  }}
                  >{user.charAt(0)}</h1>
                  <div className="flex items-center">
                    <span className="mr-3 ml-2">{user}</span>
                    {clients.includes(user) && <span className="text-green-500">
                      <svg width="10" height="10">
                        <circle
                          cx="5"
                          cy="5"
                          r="5"
                          fill="currentColor"
                        ></circle>
                      </svg>
                    </span>}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}