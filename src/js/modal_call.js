$('.modal_call').html(`
<div class="modal_body">
        <div class="modal_content">
            <div class="close_modal">
                <div class="close_modal-item">
                    <img src="./src/img/close_modal.svg" alt="" class="close_modal-btn">
                </div>
            </div>
            <div class="choose_modal d-flex">
                <h2 class="choose_modal-item" id="auth">
                    Вход
                </h2>
                <h2 class="choose_modal-item" id="register">
                    Регистрация
                </h2>
            </div>
            <div class="modal-form-block" id="form-auth">
                <form action="" class="modal_form">
                    <input required type="text" class="modal-form-input" placeholder="Логин">
                    <input required type="password" class="modal-form-input" placeholder="Пароль">
                    <button class="enter_modal">
                        Вход
                    </button>
                </form>
            </div>
            <div class="modal-form-block " id="form-register">
                <form action="" class="modal_form">
                    <input type="text" required class="modal-form-input" placeholder="Ваше имя">
                    <input type="email" required class="modal-form-input" placeholder="Ваш e-mail">
                    <input type="tel" required class="modal-form-input" placeholder="Ваш телефон">
                    <button type="submit" class="enter_modal" id="enter_register">
                        Зарегистрироваться
                    </button>
                </form>
            </div>

        </div>
    </div>
`)