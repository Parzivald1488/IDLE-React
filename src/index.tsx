import { render } from "react-dom";
import './index.scss';
import { StrictMode } from "react";
import {ChakraProvider, Progress} from "@chakra-ui/react";

render(
  <StrictMode>
      <ChakraProvider>
          <div className='app'>
              <Progress value={20} size='xs' colorScheme='pink' />
          </div>
      </ChakraProvider>
  </StrictMode>,
  document.getElementById('root'),
);