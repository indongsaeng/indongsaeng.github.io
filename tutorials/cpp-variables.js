var cppSrc = [
	"https://openload.co/embed/x-fxwfEIgGM/01._Introduction.wmv.mp4",
	"https://openload.co/embed/0A46vYec2pU/02._What_Is_Swing_.wmv.mp4",
	"https://openload.co/embed/0zMmVvj1f3Q/03._Swing_Features.wmv.mp4",
	"https://openload.co/embed/EhBI95SqwAs/04._Model-View-Controller_Architecture.wmv.mp4",
	"https://openload.co/embed/FPi-azMYW-c/05._Downloading_and_Installing_NetBeans.wmv.mp4",
	"https://openload.co/embed/CDC51k1qoGg/06._Exploring_NetBeans.wmv.mp4",
	"https://openload.co/embed/I--Ez5AmhY8/07._Creating_Your_First_Project.wmv.mp4",
	"https://openload.co/embed/dk8X0mygvkI/08._Summary.wmv.mp4",
	"https://openload.co/embed/1Nhq0Ijuezw/09._Labels_and_Text_Components.wmv.mp4",
	"https://openload.co/embed/uYPLEHuqitk/10._Buttons.wmv.mp4",
	"https://openload.co/embed/UYXbqaPkNLc/11._Lists_and_Combo_Boxes.wmv.mp4",
	"https://openload.co/embed/k8aXF0Le_4c/12._Spinners%2C_Sliders_and_Progress_Bars.wmv.mp4",
	"https://openload.co/embed/DSJqFQRK1H4/13._Tables_and_Trees.wmv.mp4",
	"https://openload.co/embed/cnf7AsKXaZQ/14._Summary.wmv.mp4",
	"https://openload.co/embed/WPFPTlN-UTM/15._Structure.wmv.mp4",
	"https://openload.co/embed/BonypCDuS1M/16._Panels.wmv.mp4",
	"https://openload.co/embed/vyfmfM2T56c/17._Scroll_Panes.wmv.mp4",
	"https://openload.co/embed/Kgg96qS87PY/18._Split_Panes.wmv.mp4",
	"https://openload.co/embed/Lf7slI4vwBg/19._Tabbed_Panes.wmv.mp4",
	"https://openload.co/embed/hA6rt6SbS4o/20._Layered_Panes.wmv.mp4",
	"https://openload.co/embed/8KQtcianGhI/21._Tool_Bars.wmv.mp4",
	"https://openload.co/embed/VcdZFeQVyX8/22._Desktop_Pane_and_Internal_Frames.wmv.mp4",
	"https://openload.co/embed/QFA1Kk2iOE0/23._Summary.wmv.mp4",
	"https://openload.co/embed/8Z1uywQoi3I/24._MenuBar%2C_Menus%2C_MenuItems_and_Separators.wmv.mp4",
	"https://openload.co/embed/2f9n11-VgGo/25._Radio_Buttons_and_Checkbox_Menu_Items.wmv.mp4",
	"https://openload.co/embed/ycDQ3E7nfvk/26._Event_Handling.wmv.mp4",
	"https://openload.co/embed/8EfAQUgTl-s/27._Pop_Up_Menus.wmv.mp4",
	"https://openload.co/embed/fBMcDtaswRw/28._Summary.wmv.mp4",
	"https://openload.co/embed/eD3tRpwCiww/29._Option_Panes.wmv.mp4",
	"https://openload.co/embed/n8mJBq6eu8c/30._File_Choosers.wmv.mp4",
	"https://openload.co/embed/RuQDW47ouJY/31._Color_Choosers.wmv.mp4",
	"https://openload.co/embed/1njOcN9HXZk/32._Summary.wmv.mp4",
	"https://openload.co/embed/K_IDUtCK9gM/33._Overview.wmv.mp4",
	"https://openload.co/embed/uy4kke9qa14/34._Inserting_and_Adding.wmv.mp4",
	"https://openload.co/embed/9XCMI7pHfek/35._Sub_Containers.wmv.mp4",
	"https://openload.co/embed/udICh5fSkMo/36._Summary.wmv.mp4",
	"https://openload.co/embed/wZ7u2IN25dk/37._Binding_Properties_to_Other_Properties.wmv.mp4",
	"https://openload.co/embed/EghMU8zkFEo/38._Setting_Up_a_JavaDB_Database.wmv.mp4",
	"https://openload.co/embed/LFxlKcFXB_g/39._Binding_Components_To_a_Database.wmv.mp4",
	"https://openload.co/embed/yp5qHgFDSVI/40._Summary.wmv.mp4",
	"https://openload.co/embed/UirFAYq72po/41._The_Database_Code.wmv.mp4",
	"https://openload.co/embed/ArqjQQLyV9A/42._Altering_the_GUI.wmv.mp4",
	"https://openload.co/embed/lNNq2g9x-_o/43._Insert.wmv.mp4",
	"https://openload.co/embed/pvEYpoYYJiQ/44._Update_and_Delete.wmv.mp4",
	"https://openload.co/embed/UgimKBU_sX0/45._Summary.wmv.mp4",
	"https://openload.co/embed/xjytzBiG3-g/46._What_You_Have_Learned.wmv.mp4",
	"https://openload.co/embed/Y4hzflaQQ2Y/47._Moving_Forward.wmv.mp4"
];

$.each(cppSrc, function(c){

	var dataCounter = c+1;
	var dataSrc = cppSrc[c];
	var itemAppend = $('<li class="waves-effect waves-red">'+
							'<a class="navi-btn" href="javascript:;" data-iframe="'+dataSrc+'">'+dataCounter+'</a></li>');
	$('.pagination').append(itemAppend);
	$('.pagination li:first-child').addClass('active');

})
