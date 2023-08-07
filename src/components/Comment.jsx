import React from 'react';

const Comment = (props) => {
    // let content = props.contenu
    return (
        <div className="comment-zone">
    <div id="respond" className="comment-in">
        <h3>Laissez un commentaire ici</h3>
        <form action="rigolazNode.js" method="post" id="commentform" className="comment-form">
            <p className="comment-form-comment">
                <label htmlFor="comment">{props.contenu}</label>
                <textarea id="comment" name="comment" cols="45" rows="8" maxLength="65525" required="required" placeholder="Faites nous un commentaire pour l'amélioration de notre site web!"></textarea></p>
            <p className="comment-form-author">
                <label htmlFor="author">Nom <span className="required">*</span></label>
                <input type="text" id="author" name="author" value="" size="30" maxLength="245" required="required"/></p>
            <p className="comment-form-email">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" id="email" name="email" value="" size="30" maxLength="100" aria-describedby="email-notes" required="required"/></p>
            <p className="comment-form-url">
                <label htmlFor="url">Site web</label>
                <input type="text" id="url" name="url" value="" size="30" maxLength="200"/></p>
            <p className="comment-form-cookies">
                <input type="checkbox" id="wp-comment-cookies-consent" name="cookies-consent" value="yes"/>
                <label htmlFor="wp-comment-cookies-consent"> Mémoriser mes coordonnées pour mon prochain passage ici!</label></p>
            <input type="hidden" name="_mc4wp_subscribe_wp-comment-form" value="0"/>
            <p className=" mc4wp-checkbox mc4wp-checkbox-wp-comment-form">
                <input type="checkbox" name="cookies-consent" id='getinfo' value="1"/>
                <label htmlFor="getinfo">Avoir les infos de RIGOLAZ</label></p>
            <p className="form-submit">
                <input type="submit" name="submit" id="submit" className="submit" value="Poster"/>
                <input type="hidden" name="comment_post_ID" value="21059" id="comment_post_ID"/>
                <input type="hidden" name="comment_parent" id="comment_parent" value="0"/></p>
            <p id='phide'>
                <input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="1d28a930e8"/></p>
            <p className="antispam-group antispam-group-q">
                <label>Copy and paste this code: <strong className="antspmpro-input-a">micuno</strong> <span className="required">*</span></label>
                <input type="hidden" name="antspmpro-a" className="antispam-control antispam-control-a" value="micuno"/>
                <input type="text" name="antspmpro-q-luwele" className="antispam-control antispam-control-q" value="4.1"/>
            </p>
            <p className="antispam-group antispam-group-e" >
                <label>Laisser ce champs vide</label>
                <input type="text" name="antspmpro-e-email-url-website-luwele" className="antispam-control antispam-control-e" value=""/>
            </p>
            <textarea id='lastTextA' name="ak_hp_textarea" cols="45" rows="8" maxLength="100" ></textarea>
            <input type="hidden" id="ak_js" name="ak_js" value="1628593735447"/>
        </form>
    </div>
</div>
    );
};

export default Comment;