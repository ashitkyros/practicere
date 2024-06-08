import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutingPage from "./RoutingPage";
import CustomeDrawer from "../Componets/Drawer";
import Comments from "../Componets/Comments";
import CommentsDetail from "../Componets/CommentsDetail/CommentsDetail";
import Pokemon from "../Componets/Pokemon";
import PokemonDetail from "../Componets/PokemonDetail";
import AccordionTheme from "../Componets/Accordion";
import FormTheme from "../Componets/Form";
import ActionForm from "../Componets/ActionForm";
import TodoData from "../Componets/TodoData";
import TicketGenerate from "../Componets/TicketGenerate";

function MyRoute() {
  return (
    <Routes>
      <Route path="/" element={<CustomeDrawer />}>
        <Route path="home"></Route>
        <Route path="about" element={<div>About Com</div>} />
        <Route path="routing" element={<RoutingPage>Hello</RoutingPage>} />
        <Route path="child1" element={<>child1</>} />
        <Route path="child2" element={<>child2</>} />
        <Route path="inner-child" element={<>inner Child</>} />

        <Route path="comments" element={<Comments />} />
        <Route path="comments/comment-detail" element={<CommentsDetail />} />

        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokemon-detail" element={<PokemonDetail />} />

        <Route path="accordion" element={<AccordionTheme />} />

        <Route path="form" element={<FormTheme />} />
        <Route path="form-action" element={<ActionForm />} />


        <Route path="todo" element={<TodoData />} />
        <Route path="ticket" element={<TicketGenerate />} />
      </Route>
      <Route path="/login" element={<>Login page</>} />
      {/* <Route path='/product' element={<><Outlet /> Product page  </>}>
        <Route path='abc' element={<>Abc com</>}/>
      </Route>
      <Route path='/routing'  element={<ProductPage />}/>
      <Route path='*' element={<div>404 Com</div>}/> */}
    </Routes>
  );
}

export default MyRoute;
