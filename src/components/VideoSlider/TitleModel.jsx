import React from "react";
import "./TitleModel.css";
export function TitleModel() {
  return (
    <div className="genn-TitleModel">
      <h2 className="genn-TitleModel-head">Заказ на дому</h2>
      <p className="genn-TitleModel-p">
        Для вашего удобства мы предлагаем выезд дизайнера-замерщика в кратчайшие
        сроки. Дата и стоимость выезда зависит от адреса вашего местонахождения.
        <br />
        <br />
        Наш профессиональный дизайнер выедет к вам на дом, чтобы воплотить в
        жизнь все ваши идеи и желания.
        <br />С тщательным вниманием к деталям, мы учтем кривизну ваших стен,
        предложим лучшие решения для оптимального использования пространства,
        подберем для вас лучшие материалы, сочетающие в себе качество и стиль.
        <br />
        <br />
        Чтобы замер прошёл быстро и без проблем, заранее подготовьте место, куда
        планируется установка мебели:
        <br />- уберите посторонние предметы и обеспечьте полный доступ к месту;
        <br />- материал пола, стен, потолка, расположение обналичек, розеток,
        выступов и других ориентиров должны быть сохранены после замера.
      </p>
      <div className="genn-button-container">
        <button className="genn-button-gradient">Заказать выезд замерщика</button>
      </div>
    </div>
  );
}
