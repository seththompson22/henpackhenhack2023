from nicegui import ui
with ui.column():
    with ui.row():
        ui.number(label='Hour', value=12,
                on_change=lambda e: result.set_text(f'you entered: {e.value}'))

        ui.number(label='Minute', value=00,
                on_change=lambda e: result.set_text(f'you entered: {e.value}'))

    with ui.row():
        ui.number(label='Hour', value=12,
                on_change=lambda e: result.set_text(f'you entered: {e.value}'))
        

        ui.number(label='Minute', value=00,
                on_change=lambda e: result.set_text(f'you entered: {e.value}'))
        

ui.run()