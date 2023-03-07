import { useMutation} from "villus";
import { ADDFAVORITE } from "../types";

type ID=string|string[];
type Text=string|undefined;

export function useAFav(id:ID,clasi:string) {
  
  const { execute } = useMutation(ADDFAVORITE);
  const variables = {
    _id:id,
    class: clasi
  }
  const addfavorite = (title:Text) => {
    execute(variables)
    alert(`${title} add favorites`)
  }
  
  return {addfavorite}
}