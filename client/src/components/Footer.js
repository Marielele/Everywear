import React from 'react'

export const Footer = () => {
    return (
        <footer className="bd-footer bg-dark text-center text-white">
            <div className="text-center p-3">
                © 2022 Everywear
            </div>
            <script src="<?= media(); ?>js/<?= $data['page_functions_js']?>"></script>
            <script src="<?= media(); ?>js/functions_navbar.js"></script>
        </footer>
    )
}