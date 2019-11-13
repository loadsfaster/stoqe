var config = {
    style: 'mapbox://styles/stoqe/ck2vkzzei0trh1cruy6nxv5z9',
    accessToken: 'pk.eyJ1Ijoic3RvcWUiLCJhIjoiY2sydml5YjFpMDVvMTNkbHE3Z21vcmt6diJ9.HEwcTWlpQWl-MmwCQNuWng',
    showMarkers: true,
    alignment: 'left',
    theme: 'light',
    title: '',
    subtitle: '',
    byline: 'Explore Salt + Light (A working demo by STOQE)',
    footer: 'This StoryMap is a work-in-progress but would be a beautiful way to showcase the incredible location of S+L and really engage visitors with emotion. And we all know emotions sell.',
    chapters: [
        {
            id: 'glacier-np',
            image: 'https://www.stoqe.com/i/sandl/logo.jpg',
            title: '',
            description: '<strong class="text-lg">Scroll down to Explore &darr;</strong>',
            location: {
                center: [153.46465, -28.10502],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'harrison1998',
            title: 'Salt + Light is an absolute beachfont property at Palm Beach, Gold Coast. Perfectly positioned between Brisbane and Byron Bay, the best of all worlds are right at your doorstep. Literally...',
            image: 'https://www.stoqe.com/i/sandl/view-sm.jpg',
            description: '<span class="text-lg">Scroll down to keep exploring &darr;</span>',
            location: {
                center: [153.46465, -28.10502],
                zoom: 8.5,
                pitch: 51.50,
                bearing: -25
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'harrison2015',
            title: 'Tucked between headlands and nested between creeks, Salt + Light is a sanctuary of serenty with specatacular views North, South, and straight out to the ocean deep. Within walking distance of cafes, restuarants, & shops it\'s also the pefect doorway to explore the the Gold Coast and beyond.',
            image: 'https://www.stoqe.com/i/sandl/view-north.jpg',
            description: '<span class="text-lg">Scroll down to keep exploring &darr;</span>',
            location: {
                center: [153.46465, -28.10502],
                zoom: 12.5,
                pitch: 90,
                bearing: 25
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'blackfoot1998',
            title: 'Only half an hour to the stunning Gold Coast Hinterland.',
            image: 'https://www.stoqe.com/i/sandl/hinterland-sm.jpg',
            description: '<span class="text-lg">Scroll down to keep exploring &darr;</span>',
            location: {
                center: [153.27745, -28.18521],
                zoom: 10,
                pitch: 160,
                bearing: 70
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'agassiz1998',
            title: 'Only 50mins to Brisbane',
            image: 'https://www.stoqe.com/i/sandl/brisbane-sm.jpg',
            description: '<span class="text-lg">Scroll down to keep exploring &darr;</span>',
            location: {
                center: [153.02305, -27.47043],
                zoom: 9,
                pitch: 180,
                bearing: 150
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'blackfoot2015',
            title: 'Only 50mins from Byron Bay',
            image: 'https://www.stoqe.com/i/sandl/byron-sm.jpg',
            description: '<span class="text-lg">Scroll down to keep exploring &darr;</span>',
            location: {
                center: [153.61405, -28.64106],
                zoom: 10,
                pitch: 180,
                bearing: -15
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'agassiz2015',
            title: 'At Salt + Light Beach House you\'ll always feel at home.',
            image: 'https://www.stoqe.com/i/sandl/view-sm.jpg',
            description: '<span class="text-lg"><a href=\"\">Book Now via Airbnb</a> or <a href=\"\">return to our homepage</a></span>',
            location: {
                center: [153.46465, -28.10502],
                zoom: 12,
                pitch: 200,
                bearing: 67
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        }
    ]
};
