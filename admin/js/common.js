// sidebar menu
$(".gnb .gnb-extend > a")
  .off("click")
  .on("click", function (e) {
    e.preventDefault();

    const $li = $(this).parent();
    const menuId = $li.attr("date-menu");
    const $depth = $("#" + menuId);

    if ($li.hasClass("active")) {
      $li.removeClass("active");
      $depth.slideUp(200);
    } else {
      $(".gnb .gnb-extend").removeClass("active");
      $(".gnb .depth").slideUp(200);

      $li.addClass("active");
      $depth.slideDown(200);
    }
  });

$(".gnb .depth").hide();

function notify(title, text, status) {
  new Notify({
    status: status,
    title: title,
    text: text,
    effect: "fade",
    speed: 300,
    customClass: "",
    customIcon: "",
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    notificationsGap: null,
    notificationsPadding: null,
    type: "outline",
    position: "right top",
    customWrapper: ""
  });
}

function openModal() {
  $(".modal-wrap").show();
}

function openModal2() {
  $(".modal-wrap-2").show();
}

function closeNoti() {
  $(".noti").hide();
}

// file input
function addFile() {
  const $td = $(event.target).closest("td");
  const $fileInput = $td.find('input[type="file"]');
  const $textInput = $td.find('input[type="text"][readonly]');
  const $filesControl = $td.find(".files-control");
  $fileInput.click();

  $fileInput.off("change").on("change", function () {
    if (this.files.length > 0) {
      let fileNames = [];
      for (let i = 0; i < this.files.length; i++) {
        const fileName = this.files[i].name;
        fileNames.push(fileName);

        const $fileElement = $('<span class="file-element"></span>');
        $fileElement.append("<span>" + fileName + "</span>");
        $fileElement.append(
          '<button type="button" class="button-close" aria-label="닫기" onclick="removeFile(this)"></button>'
        );
        $filesControl.append($fileElement);
      }
      $textInput.val(fileNames.join(", "));
    } else {
      $textInput.val("");
    }

    this.value = "";
  });
}

function removeFile(btn) {
  const $td = $(btn).closest("td");
  const $filesControl = $td.find(".files-control");
  const $textInput = $td.find('input[type="text"][readonly]');
  $(btn).closest(".file-element").remove();

  const fileNames = [];
  $filesControl.find(".file-element span:first-child").each(function () {
    fileNames.push($(this).text());
  });
  $textInput.val(fileNames.join(", "));
}
