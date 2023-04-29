from nicegui import ui

ui.label('Hello Hens!')

ui.button('Click to Create your Pack!', on_click=lambda: ui.notify(f'You clicked me!'))
ui.button('Find out what times work best for your pack!', on_click=lambda: ui.notify(f'You clicked me!'))

ui.run()