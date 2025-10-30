// ==UserScript==
// @name         Zeus - AutoClick APPING1_C2
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Sélectionne automatiquement APPING1_C2 dans Zeus
// @author       quentiinlvq
// @match        https://zeus.ionis-it.com/*
// @match        http://zeus.ionis-it.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function findAndExpandNode(nodeName) {
        const allTreeNodes = document.querySelectorAll('tree-node');

        for(let treeNode of allTreeNodes) {
            const contentSpan = treeNode.querySelector('.node-content-wrapper tree-node-content span');

            if(contentSpan && contentSpan.textContent.trim() === nodeName) {
                const nodeDiv = treeNode.querySelector(':scope > div');
                const isCollapsed = nodeDiv?.classList.contains('tree-node-collapsed');

                if(isCollapsed) {
                    const toggle = treeNode.querySelector('.toggle-children-wrapper');
                    if(toggle) {
                        toggle.click();
                        return true;
                    }
                } else {
                    return false;
                }
            }
        }

        return null;
    }

    function findAndCheckAPPING1_C2() {
        const allTreeNodes = document.querySelectorAll('tree-node');

        for(let treeNode of allTreeNodes) {
            const contentSpan = treeNode.querySelector('.node-content-wrapper tree-node-content span');

            if(contentSpan && contentSpan.textContent.trim() === 'APPING1_C2') {
                const checkbox = treeNode.querySelector('tree-node-checkbox input.tree-node-checkbox');

                if(checkbox) {
                    if(!checkbox.checked) {
                        checkbox.click();

                        setTimeout(() => {
                            checkbox.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        }, 100);

                        return true;
                    } else {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    function autoSelectSequence() {
        findAndExpandNode('EPITA');

        setTimeout(() => {
            findAndExpandNode('EPITAPPRENTISSAGE');

            setTimeout(() => {
                findAndExpandNode('APPING 1');

                setTimeout(() => {
                    const success = findAndCheckAPPING1_C2();

                    return success;
                }, 250);
            }, 250);
        }, 250);
    }

    function waitForTreeWithObserver() {
        const checkAndExecute = () => {
            const treeRoot = document.querySelector('tree-root#treeGroup1');
            const firstNode = document.querySelector('tree-node');

            if(treeRoot && firstNode) {
                autoSelectSequence();
                return true;
            }
            return false;
        };

        if(checkAndExecute()) return;

        const observer = new MutationObserver((mutations) => {
            if(checkAndExecute()) {
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        setTimeout(() => {
            observer.disconnect();
        }, 10000);
    }

    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForTreeWithObserver);
    } else {
        waitForTreeWithObserver();
    }
})();
