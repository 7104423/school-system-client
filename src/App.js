import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/style.css";
import { validateUser } from "./utils/api";
import { WholePageLoader } from "./containers/WholePageLoader";
import { ViewTrapProvider, ViewTrapRender } from "./components/viewtrap";
import { useUser } from "./contexts/userContext";
import { LoginView } from "./views/Login";
import { Users } from "./views/Users";
import { UserDetail } from "./views/UserDetail";
import { UserAdd } from "./views/UserAdd";
import { UserEdit } from "./views/UserEdit";
import { Subjects } from "./views/Subjects";
import { SubjectDetail } from "./views/SubjectDetail";
import { SubjectAdd } from "./views/SubjectAdd";
import { SubjectEdit } from "./views/SubjectEdit";
import { Topics } from "./views/Topics";
import { TopicDetail } from "./views/TopicDetail";
import { TopicAdd } from "./views/TopicAdd";
import { TopicEdit } from "./views/TopicEdit";
import { DigitalContents } from "./views/DigitalContents";
import { DigitalContentDetail } from "./views/DigitalContentDetail";
import { DigitalContentAdd } from "./views/DigitalContentAdd";
import { DigitalContentEdit } from "./views/DigitalContentEdit";
import { StudyProgrammes } from "./views/StudyProgrammes";
import { StudyProgrammeDetail } from "./views/StudyProgrammeDetail";
import { StudyProgrammeAdd } from "./views/StudyProgrammeAdd";
import { StudyProgrammeEdit } from "./views/StudyProgrammeEdit";

function App() {
  const [hasAccess, setAccess] = useState(null);
  const user = useUser();

  useEffect(() => {
    const token = user.getToken();
    if (!token) {
      setAccess(false);
      return;
    }
    (async () => {
      try {
        const data = await validateUser();
        user.setUser(data.user);
        setAccess(true);
      } catch (error) {
        setAccess(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      {hasAccess === null && <WholePageLoader />}
      {hasAccess !== null && (
        <ViewTrapProvider>
          <BrowserRouter>
            <Routes>
              {hasAccess && (
                <>
                  <Route exact path="/app" element={<Subjects />} />
                  <Route exact path="/app/subjects" element={<Subjects />} />
                  <Route path="/app/subject/add" element={<SubjectAdd />} />
                  <Route
                    path="/app/subject/edit/:id"
                    element={<SubjectEdit />}
                  />
                  <Route path="/app/subject/:id" element={<SubjectDetail />} />
                  <Route exact path="/app/topics" element={<Topics />} />
                  <Route
                    exact
                    path="/app/digital-contents"
                    element={<DigitalContents />}
                  />
                  {/* Nova routa pro digital content add */}
                  <Route
                    exact
                    path="/app/digital-content/add"
                    element={<DigitalContentAdd />}
                  />
                  {/* Nova routa pro digital content edit */}
                  <Route
                    path="/app/digital-content/edit/:id"
                    element={<DigitalContentEdit />}
                  />
                  <Route
                    exact
                    path="/app/digital-content/:id"
                    element={<DigitalContentDetail />}
                  />
                  <Route exact path="/app/topic/add" element={<TopicAdd />} />
                  <Route path="/app/topic/edit/:id" element={<TopicEdit />} />
                  <Route path="/app/topic/:id" element={<TopicDetail />} />
                  <Route
                    exact
                    path="/app/study-programmes"
                    element={<StudyProgrammes />}
                  />
                  <Route
                    path="/app/study-programme/:id"
                    element={<StudyProgrammeDetail />}
                  />
                  <Route
                    path="/app/study-programme/add"
                    element={<StudyProgrammeAdd />}
                  />
                  <Route
                    path="/app/study-programme/edit/:id"
                    element={<StudyProgrammeEdit />}
                  />
                  <Route exact path="/app/users" element={<Users />} />
                  <Route path="/app/user/:id" element={<UserDetail />} />
                  <Route path="/app/user/add" element={<UserAdd />} />
                  <Route path="/app/user/edit/:id" element={<UserEdit />} />
                  <Route path="/app/*" element={<Subjects />} />
                </>
              )}
              <Route path="*" element={<LoginView />} />
            </Routes>
          </BrowserRouter>
          <ViewTrapRender />
        </ViewTrapProvider>
      )}
    </div>
  );
}

export default App;
