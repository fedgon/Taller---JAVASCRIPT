var user = '{"_id":"5a73794999c23affd30c3535",  "index": 0,  "guid": "340d3f77-031b-423f-a01a-4e695e9cdab2",  "isActive": false,  "balance": "$2,126.11",  "picture": "https://ca.slack-edge.com/T6SHJS135-U8QG5V0P7-g785817947db-512",  "age": 27,  "eyeColor": "brown",  "name": {    "first":"Federico",    "last":"González"  },  "work": "Front End Developer",  "email": "federico.gonzalez@mail.udp.cl",  "phone": "+569 (8) 902-0634",  "address": "Pedro de Valdivia 0122, Providencia, Santiago de Chile",  "about": "Irure Lorem proident do deserunt deserunt aliqua est consectetur. Eiusmod ex qui excepteur voluptate. Ut eu occaecat deserunt aliquip dolor ut laboris magna incididunt est ullamco sint. Et sit anim elit voluptate aute reprehenderit mollit sint et occaecat occaecat proident enim esse. Reprehenderit minim elit non enim reprehenderit laboris voluptate nulla incididunt veniam ex adipisicing.",  "lastConnect": "Wednesday, February 14, 2018",  "latitude": "-68.114463",  "longitude": "101.648502",  "tags": ["sunt", "ipsum", "id", "aliqua", "dolor"],  "greeting": "Hello, Federico! You have 9 unread messages.",  "favoriteFruit": "Peach"}';

var archive = JSON.parse(user)

$(document).ready(function() {

  $('.profile-pic').attr('src', archive.picture)
  $('.profile-name').html('<h6 style="margin-bottom: 0;">' + archive.name.first + ' ' + archive.name.last + '</h6>');
  $('.profile-name').append('<p style="font-size: 12px;">' + archive.work + '</p>')

  $('.post-window').on('click', '.delete-post', function(){
    $(this).parent().parent().remove()
  })

  $('.click-pub').on('click', function(){

    // val se usa para sacar el valor de algo!
    var post = $('.writing-space').val()
    if (post != '') {
      $('.new-tweets').append('<div class="w-100 post-backg mt-0 ml-0 mb-2 mr-5 d-flex flex-column post-window"><div  class="w-100 d-flex flex-row"><img class="profile-pic" src="" alt=""><div class="post-content p-2"><div   class="profile-name m-0"></div><p class="writted-text mb-2">'+post+'</p></div><a class="delete-post"  href="#">X</a></div><div class="w-100 d-flex flex-row"><a class="likes pl-3" href="#"><i class="far fa-heart  heart"></i></a><p class="likes-num pl-2 mb-0"><span class="number">0</span> likes</p></div></div>')

      $('.profile-pic').attr('src', archive.picture)
      $('.profile-name').html('<h6 style="margin-bottom: 0;">' + archive.name.first + ' ' + archive.name.last + '</h6>');
      $('.profile-name').append('<p style="font-size: 12px;">' + archive.work + '</p>')

      // $('p.writted-text').text(post)
      $('.writing-space').val('')

    }

    $('.post-window').on('click', '.delete-post', function(){
      $(this).parent().parent().remove()
    })

    $('.post-window').on('click', '.heart', function(e){
      e.preventDefault();

      var botonLike = parseInt($(this).parent().siblings().find('.number').text());

      if(botonLike == 0){
        $(this).parent().siblings().html('<p><span class="number">1</span> likes</p>')
        $(this).parent().html('<i class="fas fa-heart heart"></i>')
      } else if(botonLike == 1) {
        $(this).parent().siblings().html('<p><span class="number">0</span> likes</p>')
        $(this).parent().html('<i class="far fa-heart heart"></i>')
      }

    })

  })

  $('.post-window').on('click', '.heart', function(e){
    e.preventDefault();

    var botonLike = parseInt($(this).parent().siblings().find('.number').text());

    if(botonLike == 0){
      $(this).parent().siblings().html('<p><span class="number">1</span> likes</p>')
      $(this).parent().html('<i class="fas fa-heart heart"></i>')
    } else if(botonLike == 1) {
      $(this).parent().siblings().html('<p><span class="number">0</span> likes</p>')
      $(this).parent().html('<i class="far fa-heart heart"></i>')
    }

  })

});
