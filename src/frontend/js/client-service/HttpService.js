export default class HttpService{

  getNoteList(callback) {

    $.ajax({
      method: "GET",
      url: "/notes/",
      success: (res) => {
        callback(res);
      }
    });
  }

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


}

