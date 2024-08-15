import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test on <GifItem />', () => { 
    
    test('should match with the snapshot', () => { 

            render ( <GifItem /> )

     });

});