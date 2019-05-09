import './shared_global.css'
import React from 'react';

class StoreHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showStoreDropdown: false,
            showCommunityDropdown: false,
            showLanguagesDropdown: false
        };
    }

    handleHover = (event) => {
        this.setState({ showStoreDropdown: true });
    };

    handleLeave = (event) => {
        this.setState({ showStoreDropdown: false });
    };

    render() {
        return (
            <div id="global_header">
                <div class="content">
                    <div class="logo">
                        <span id="logo_holder">
                            <a href="https://store.steampowered.com/">
                                <img src="https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016" width="176" height="44" alt="Logo Header" />
                            </a>
                        </span>
                    </div>

                    <div class="supernav_container">
                        <div class="menuitem supernav" onMouseLeave={this.handleLeave}>
                            <a class="menuitem supernav" href="https://store.steampowered.com/" data-tooltip-type="selector" data-tooltip-content=".submenu_store" onMouseEnter={this.handleHover}>
                                STORE	</a>
                            {this.state.showStoreDropdown && <SubmenuStore />}
                        </div>
                        <div class="menuitem supernav" onMouseLeave={this.handleLeave}>
                            <a class="menuitem supernav" href="https://steamcommunity.com/" data-tooltip-type="selector" data-tooltip-content=".submenu_community">COMMUNITY</a>
                        </div>
                        <div class="menuitem" onMouseLeave={this.handleLeave}>
                            <a class="menuitem supernav" href="https://store.steampowered.com/about/">ABOUT</a>
                        </div>
                        <div class="menuitem" onMouseLeave={this.handleLeave}>
                            <a class="menuitem supernav" href="https://help.steampowered.com/en/">SUPPORT</a>
                        </div>
                    </div>

                    <div id="global_actions">
                        <div id="global_action_menu">
                            <div class="header_installsteam_btn header_installsteam_btn_green">

                                <a class="header_installsteam_btn_content" href="/clientdl">
                                    Install Steam						</a>
                            </div>


                            <a class="global_action_link" href="https://store.steampowered.com/login/?redir=&amp;redir_ssl=1">login</a>
                            &nbsp;|&nbsp;
					<span class="pulldown global_action_link" id="language_pulldown" onclick="ShowMenu( this, 'language_dropdown', 'right' );">language</span>

                            {this.state.showLanguagesDropdown && <SubmenuLanguages />}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class SubmenuStore extends React.Component {
    render() {
        return (
            <div class="supernav_content">
                <div class="submenu_store" data-submenuid="store" >
                    <a class="submenuitem" href="https://store.steampowered.com/">Featured</a>
                    <a class="submenuitem" href="https://store.steampowered.com/explore/">Explore</a>
                    <a class="submenuitem" href="https://store.steampowered.com/curators/">Curators</a>
                    <a class="submenuitem" href="https://steamcommunity.com/my/wishlist/">Wishlist</a>
                    <a class="submenuitem" href="https://store.steampowered.com/news/">News</a>
                    <a class="submenuitem" href="https://store.steampowered.com/stats/">Stats</a>
                </div>
            </div >
        )
    }
}

class SubmenuCommunity extends React.Component {
    render() {
        return (
            <div class="submenu_community" data-submenuid="community">
                <a class="submenuitem" href="https://steamcommunity.com/">Home</a>
                <a class="submenuitem" href="https://steamcommunity.com/discussions/">Discussions</a>
                <a class="submenuitem" href="https://steamcommunity.com/workshop/">Workshop</a>
                <a class="submenuitem" href="https://steamcommunity.com/market/">Market</a>
                <a class="submenuitem" href="https://steamcommunity.com/?subsection=broadcasts">Broadcasts</a>
            </div>
        )
    }
}

class SubmenuLanguages extends React.Component {
    render() {
        return (
            <div class="popup_block_new" id="language_dropdown">
                <div class="popup_body popup_menu">
                    <a class="popup_menu_item tight" href="?l=schinese" onclick="ChangeLanguage( 'schinese' ); return false;">简体中文 (Simplified Chinese)</a>
                    <a class="popup_menu_item tight" href="?l=tchinese" onclick="ChangeLanguage( 'tchinese' ); return false;">繁體中文 (Traditional Chinese)</a>
                    <a class="popup_menu_item tight" href="?l=japanese" onclick="ChangeLanguage( 'japanese' ); return false;">日本語 (Japanese)</a>
                    <a class="popup_menu_item tight" href="?l=koreana" onclick="ChangeLanguage( 'koreana' ); return false;">한국어 (Korean)</a>
                    <a class="popup_menu_item tight" href="?l=thai" onclick="ChangeLanguage( 'thai' ); return false;">ไทย (Thai)</a>
                    <a class="popup_menu_item tight" href="?l=bulgarian" onclick="ChangeLanguage( 'bulgarian' ); return false;">Български (Bulgarian)</a>
                    <a class="popup_menu_item tight" href="?l=czech" onclick="ChangeLanguage( 'czech' ); return false;">Čeština (Czech)</a>
                    <a class="popup_menu_item tight" href="?l=danish" onclick="ChangeLanguage( 'danish' ); return false;">Dansk (Danish)</a>
                    <a class="popup_menu_item tight" href="?l=german" onclick="ChangeLanguage( 'german' ); return false;">Deutsch (German)</a>
                    <a class="popup_menu_item tight" href="?l=spanish" onclick="ChangeLanguage( 'spanish' ); return false;">Español - España (Spanish - Spain)</a>
                    <a class="popup_menu_item tight" href="?l=latam" onclick="ChangeLanguage( 'latam' ); return false;">Español - Latinoamérica (Spanish - Latin America)</a>
                    <a class="popup_menu_item tight" href="?l=greek" onclick="ChangeLanguage( 'greek' ); return false;">Ελληνικά (Greek)</a>
                    <a class="popup_menu_item tight" href="?l=french" onclick="ChangeLanguage( 'french' ); return false;">Français (French)</a>
                    <a class="popup_menu_item tight" href="?l=italian" onclick="ChangeLanguage( 'italian' ); return false;">Italiano (Italian)</a>
                    <a class="popup_menu_item tight" href="?l=hungarian" onclick="ChangeLanguage( 'hungarian' ); return false;">Magyar (Hungarian)</a>
                    <a class="popup_menu_item tight" href="?l=dutch" onclick="ChangeLanguage( 'dutch' ); return false;">Nederlands (Dutch)</a>
                    <a class="popup_menu_item tight" href="?l=norwegian" onclick="ChangeLanguage( 'norwegian' ); return false;">Norsk (Norwegian)</a>
                    <a class="popup_menu_item tight" href="?l=polish" onclick="ChangeLanguage( 'polish' ); return false;">Polski (Polish)</a>
                    <a class="popup_menu_item tight" href="?l=portuguese" onclick="ChangeLanguage( 'portuguese' ); return false;">Português (Portuguese)</a>
                    <a class="popup_menu_item tight" href="?l=brazilian" onclick="ChangeLanguage( 'brazilian' ); return false;">Português - Brasil (Portuguese - Brazil)</a>
                    <a class="popup_menu_item tight" href="?l=romanian" onclick="ChangeLanguage( 'romanian' ); return false;">Română (Romanian)</a>
                    <a class="popup_menu_item tight" href="?l=russian" onclick="ChangeLanguage( 'russian' ); return false;">Русский (Russian)</a>
                    <a class="popup_menu_item tight" href="?l=finnish" onclick="ChangeLanguage( 'finnish' ); return false;">Suomi (Finnish)</a>
                    <a class="popup_menu_item tight" href="?l=swedish" onclick="ChangeLanguage( 'swedish' ); return false;">Svenska (Swedish)</a>
                    <a class="popup_menu_item tight" href="?l=turkish" onclick="ChangeLanguage( 'turkish' ); return false;">Türkçe (Turkish)</a>
                    <a class="popup_menu_item tight" href="?l=vietnamese" onclick="ChangeLanguage( 'vietnamese' ); return false;">Tiếng Việt (Vietnamese)</a>
                    <a class="popup_menu_item tight" href="?l=ukrainian" onclick="ChangeLanguage( 'ukrainian' ); return false;">Українська (Ukrainian)</a>
                    <a class="popup_menu_item tight" href="http://translation.steampowered.com" target="_blank" rel="noopener noreferrer">Help us translate Steam</a>
                </div>
            </div>
        )
    }
}

export default StoreHeader;
;