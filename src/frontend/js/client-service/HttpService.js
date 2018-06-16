export default class HttpService{


  // Common Methods have to implement in every Service like an Interface start
  getNotes(callback) {

    $.ajax({
      method: "GET",
      url: "/api/notes/",
      success: (res) => {
        if(callback){
          callback(res);
        }

      }
    });
  }

  addNote(note) {
    $.ajax({
      method: "POST",
      url: "/api/notes/",
      data: note,
      success: (() => {
        window.location.href = '/';
      })
    })
  }

  getNoteByID(id){

  }

  updateNote(note) {

  }
  // Common Methods have to implement in every Service like an Interface end


  /*
  editNoteById(id) {
    $.ajax({
      method: "GET",
      url: `/notes/${id}/`,
      success: (res) => {
        if (res) {
          $('#title').val(res['title']);
          $('#description').val(res['message']);
          $('#date-picker').val(res['taskDate']);
          if(res['priority'] !== 0) {
            $(`input[value="${res['priority']}"]`).addClass("selection-border");
          }
        }
      }
    });
  }

  updateNoteById(id, note) {
    $.ajax({
      method: "PUT",
      url: `/notes/${id}/`,
      data: note,
      success: () => {
        window.location.href = '/';
      }
    });
  }

  toggleCheckBox(id, status) {
    $.ajax({
      method: "POST",
      url: `/notes/${id}/?status=${status}`,
      success: (() => {
        return 200;
      })
    });
  }
  */



}

