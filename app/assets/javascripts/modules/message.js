$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
      `<div class="Message" data-message-id=${message.id}>
        <div class="Message__info">
          <div class="Message__info__name">
            ${message.user_name}
          </div>
          <div class="Message__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message__content">
          <p class="Message__content">
            ${message.content}
          </p>
          <img class="Message__image" src="${message.image}">
        </div>
      </div>`
    return html;
  } else {
      let html = 
    ` <div class="Message" data-message-id=${message.id}>
        <div class="Message__info">
          <div class="Message__info__name">
            ${message.user_name}
          </div>
          <div class="Message__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message__content">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
    return html;
    }
  }
  $('.FormContents').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Messages').append(html);
      $('form')[0].reset();
      $('.Messages').animate({ scrollTop: $('.Messages')[0].scrollHeight});
      $('.Send-btn').attr('disabled', false)
    })
    .fail(function(){
      alert("メッセージの送信に失敗しました")
    })
  });
});