/*To clear the Gird-Add textbox */
function clearTxt() {
	$('#serlNo').val('');
	$("#invoiceNo").val('');
	$("#billOfLadding").val('');
	$("#loadingDetails").val('');
	$("#dischargeDetails").val('');
	$("#portFrom").val('');
	$("#portTo").val('');
	$("#vessel").val('');
	$("#placeOfReceipt").val('');
	$("#tranPrty").val('');
	$("#destination").val('');
	$("#remarks").val('');
}


/*To populate the data into textbox to edit further*/
function sanGrdUpdate(selectedRow) {
	$("#serlNo").val(selectedRow[0]);
	$("#invoiceNo").val(selectedRow[1]);
	$("#billOfLadding").val(selectedRow[2]);
	$("#loadingDetails").val(selectedRow[3]);
	$("#dischargeDetails").val(selectedRow[4]);
	$("#portFrom").val(selectedRow[5]);
	$("#portTo").val(selectedRow[6]);
	$("#placeOfReceipt").val(selectedRow[7]);
	$("#destination").val(selectedRow[8]);
	$("#remarks").val(selectedRow[9]);
	$("#vessel").val(selectedRow[10]);
	$("#tranPrty").val(selectedRow[12]);
}




/*Create the Buttons under Modal tab*/
function createButton(buttonType, rowID, meta) {

	var btnActn = "edit";
	if (buttonType == "tpedit") {
		btnActn = "tpedit";
	}

	var buttonText = buttonType == btnActn ? "Edit" : "Delete";
	return '<button onClick="showIndex("' + buttonType + '",' + meta.row + ')" class="' + buttonType + '" type="button">' + buttonText + '</button>';

}


/*Create the TextBox under Modal tab*/
function fnResetControls(tblName) {
	var openedTextBox = $(tblName).find('input');
	$.each(openedTextBox, function(k, $cell) {
		var oldData = $cell.dataset.olddata;
		$(openedTextBox[k]).closest('td').html(oldData);
	});

	if (tblName == '#tblTranPrty') {
		var openedSelecttBox = $(tblName).find('select');
		$.each(openedSelecttBox, function(k, $cell) {
			var oldData = $cell.dataset.olddata;
			$(openedSelecttBox[k]).closest('td').html(oldData);
		})
	}
}

function fnCreateTextBox(value, fieldprop, reqtype) {
	return '<input class="form-control text" data-field="' + fieldprop + '" data-olddata="' + value + '" data-reqtype="' + reqtype + '" type="text" value="' + value + '" ></input>';
}


function fnCreateSelectBox(value, fieldprop, reqtype) {

	var tpselect = '<select class="form-control  selectpicker" style="width: fit-content;" id="tpRole" data-field="' + fieldprop + '" data-olddata="' + value + '" data-reqtype="' + reqtype + '"><option value="">---Select Role---</option>';
	const tpDropDownValue = ["Agent", "Consignee", "Notify party", "Other party", "Shipper"];
	tpDropDownValue.forEach(function(item, index) {

		if (item.toLowerCase() == value.toLowerCase()) {
			tpselect = tpselect + '<option value="' + item + '" selected>' + item + '</option>';
		} else {
			tpselect = tpselect + '<option value="' + item + '">' + item + '</option>';
		}

	});
	tpselect = tpselect + '</select>';
	return tpselect;
}

function fnUpdateDataTableValue($inputCell, value, tblId) {
	var dataTable = $(tblId).DataTable();
	var rowIndex = dataTable.row($($inputCell).closest('tr')).index();
	var fieldName = $($inputCell).attr('data-field');
	dataTable.rows().data()[rowIndex][fieldName] = value;
}

function btnEnable(action, tblId, tblname, selectedRow) {

	var btnId = tblId + ' tbody tr td .';
	var btnupdate = 'update';
	var btncancel = 'cancel';
	var tbnedit = 'edit';
	var btndelete = 'delete';

	if (tblname == 'tranPrty') {
		btnupdate = 'tp' + btnupdate;
		btncancel = 'tp' + btncancel;
		btndelete = 'tp' + btndelete;
		tbnedit = 'tp' + tbnedit;
	}

	if (action == 'edit') {
		$(btnId + btnupdate).removeClass(btnupdate).addClass(tbnedit).html('Edit');
		$(btnId + btncancel).removeClass(btncancel).addClass(btndelete).html('Delete');
		$(selectedRow).find('td .' + tbnedit).removeClass(tbnedit).addClass(btnupdate).html('Update');
		$(selectedRow).find('td .' + btndelete).removeClass(btndelete).addClass(btncancel).html('Cancel');

	} else {
		$(btnId + btnupdate).removeClass(btnupdate).addClass(tbnedit).html('Edit');
		$(btnId + btncancel).removeClass(btncancel).addClass(btndelete).html('Delete');
	}

}

function isNullCheck(value, type) {

	var results = [];
	var Fieldname = "";

	$.each(value, function(k, $cell) {
		data = $cell.value;
		if (type == 'select') {
			Fieldname = $cell.id;
		} else {
			Fieldname = $($cell).attr('data-field');
		}

		if (!data) {
			results.push(Fieldname);
		}
	})
	return results;
};
