import { useMutation } from 'villus'
import { ref,watch } from 'vue';
import {Record} from '../../../types';


export interface Entry {
  title: string;
  cover: string;
  description: string;
  genre: string;
  rank: number;
  chapters: number;
  sequel?: string[];
  prequels?: string[];
}



export function useEntry(type:Record,QUERY:string) {

  
const newentry = ref<Entry>({
  title: "",
  cover: "",
  description: "",
   genre: "",
  rank: 0,
  chapters:0,
  sequel:[],
  prequels:[],
});


  const { execute } = useMutation(QUERY);
  
  
  const preq=ref<string>("");
  const seq=ref<string>("");
         
  //observers para agregar secuelas y precuelas 
  watch(preq,()=>newentry.value.prequels?.push(preq.value));
  watch(seq,()=>newentry.value.sequel?.push(seq.value));

  const handlesubmit = () => {
    const variables = getvariables(type, newentry.value);
    execute(variables);
    alert(`New ${type} added correctly`);
    
    newentry.value={
      title: "",
      cover: "",
      description: "",
       genre: "",
      rank: 0,
      chapters:0,
      sequel:[],
      prequels:[],
    }
    
  }

  return {newentry,preq,seq,handlesubmit }
}


function getvariables(type: Record, newentry: Entry) {
  if (type == 'manga') {
    return {
      "manga": {
        "title": newentry.title,
        "cover": newentry.cover,
        "description": newentry.description,
        "genre": newentry.genre.split(","),
        "rank": newentry.rank.toString(),
        "chapters": newentry.chapters

      }
    }
  } else if (type == 'anime') {
    return {
      "anime": {
        "title": newentry.title,
        "cover": newentry.cover,
        "description": newentry.description,
        "genre": newentry.genre.split(","),
        "rank": newentry.rank.toString(),
        "chapters": newentry.chapters,
        "sequel": newentry.sequel,
        "prequels": newentry.prequels

      }
    }
  }
}