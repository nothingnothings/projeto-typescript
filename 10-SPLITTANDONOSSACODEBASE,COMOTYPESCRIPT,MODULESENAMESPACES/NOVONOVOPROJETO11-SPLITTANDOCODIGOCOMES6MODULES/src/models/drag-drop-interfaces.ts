


// namespace App { ///É ASSIM QUE USAMOS  'NAMESPACES'...
export interface Draggable {
    dragStartHandler(event: DragEvent): void; ///'DragEvent' --> é um type BUILTIN no typescript... --> e esse method vai retornar 'void' (não vai retornar coisa alguma, portanto, e sim só configura O DRAGEVENT...)....
    dragEndHandler(event: DragEvent): void;
  }
  
 export interface DragTarget {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void; ///O UPDATE DA UI E DA DATA, AO MESMO TEMPO, OCORRE EM 'dropHandler', essencialmente....
    dragLeaveHandler(event: DragEvent): void;
  }
  
// }


