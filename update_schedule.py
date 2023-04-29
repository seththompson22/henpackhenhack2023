from nicegui import ui

with ui.row():
        with ui.column():
                day_of_week = ui.select(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], value="Monday")
                day_of_week2 = ui.select({"Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday","Sunday":"Sunday"}).bind_value(day_of_week, 'value')


        with ui.column():
                with ui.row():
                        start_hour = ui.number(label='Hour', value=8, min=0, max=12)
                        start_minute = ui.number(label='Minute', value=0, min=0, max=59)
                        start_morning_or_night = ui.select(["AM","PM"], value="AM")
                with ui.row():
                        end_hour = ui.number(label='Hour', value=8, min=0, max=12)
                        end_minute = ui.number(label='Minute', value=0, min=0, max=59)
                        end_morning_or_night = ui.select(["AM","PM"], value="PM")



ui.run()