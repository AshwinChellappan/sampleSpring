

function addTransParty() {
	$("#divTranPrty").html("");
	var my_JSON = $("#tranPrty").val();
	var tabla = '<table id="tblTranPrty"  class="cell-border hover"><thead><tr><th>S.No</th><th>Bl.No</th><th>Role</th><th>Name</th><th>City</th><th>Country</th><th>Edit</th><th>Delete</th></tr></thead><tbody>';
	var dataSource = [];
	if (my_JSON) {
		var arr = $.parseJSON(my_JSON);

		$.each(arr, function(key, value) {
			var rowda = {
				tpBlno: value.tpBlno,
				tpRole: value.tpRole,
				tpName: value.tpName,
				tpCity: value.tpCity,
				tpCountry: value.tpCountry
			};

			dataSource.push(rowda);
		});
	}

	tabla = tabla + '</tbody></table>';
	$("#divTranPrty").html(tabla);

	$('#tblTranPrty').DataTable({
		dom: 'Bfrtip',
		data: dataSource,
		columns: [{
			render: function(data, type, row, meta) {
				return meta.row + meta.settings._iDisplayStart + 1;
			},
			width: '25px'
		},
		{
			data: 'tpBlno',
			width: '15px'

		},
		{
			data: 'tpRole',
			class: 'editable select',
			width: '500px'

		},
		{
			data: 'tpName',
			class: 'editable text',
			width: '25px'
		},
		{
			data: 'tpCity',
			class: 'editable text',
			width: '25px'
		},
		{
			data: 'tpCountry',
			class: 'editable text',
			width: '15px'
		},
		{
			//edit button creation    
			render: function(data, type, row, meta) {
				return createButton('tpedit', row.id, meta);
			},
			width: '25px'
		},
		{
			//delete button creation    

			render: function(data, type, row, meta) {
				return createButton('tpdelete', row.id, meta);
			},
			width: '25px'
		}
		],
		"searching": true,
		"paging": true,
		"info": true,
		"language": {
			"emptyTable": "No data available"
		},
		"fnRowCallback": function(nRow, aData, iDisplayIndex) {
			$("td:first", nRow).html(iDisplayIndex + 1);
			return nRow;
		},
		"stripeClasses": ['odd-row', 'even-row']
	});
	$("#tblTranPrty").width("100%");
	$('#btnTranPrtyAdd').prop("disabled", false);
};


$(document).ready(function() {
	// Add Transacting Parties data into grid 

	$('#btnTranPrtyAdd').on('click', function() {
		var serl = $("#serlNo").val();
		$('#btnTranPrtyAdd').prop("disabled", true);
		$('#tblTranPrty').DataTable().row.add({
			tpBlno: serl,
			tpRole: "",
			tpName: "",
			tpCity: "",
			tpCountry: ""

		}).draw(false);

		$("tbody td .tpedit").trigger('click', ['new']);

	});


	// Row action on Edit button click
	$(document).on('click', 'tbody td .tpedit', function(e, arg1) {
		if (!arg1) {
			arg1 = "edit";
		}
		fnResetControls('#tblTranPrty');

		var clickedRow = $($(this).closest('td')).closest('tr');
		$(clickedRow).find('td').each(function(index, item) {


			if ($(this).hasClass('editable')) {
				if ($(this).hasClass('text')) {
					var tblHdr = "";

					if (index == 3) {
						tblHdr = "tpName";
					} else if (index == 4) {
						tblHdr = "tpCity";
					} else if (index == 5) {
						tblHdr = "tpCountry";
					}
					var html = fnCreateTextBox($(this).html(), tblHdr, arg1);
					$(this).html($(html));
				}
				if ($(this).hasClass('select')) {
					if (index == 2) {
						tblHdr = "tpRole";
					}
					var html = fnCreateSelectBox($(this).html(), tblHdr, arg1);
					$(this).html($(html));
				}

			}
		});


		btnEnable('edit', '#tblTranPrty', 'tranPrty', clickedRow);

	});

	// Row action on Cancel button click
	$(document).on('click', 'tbody td .tpcancel', function(e) {

		var reqtype = "";
		$.each($('#tblTranPrty').find('input'), function(k, $cell) {
			reqtype = $cell.dataset.reqtype;
		});

		fnResetControls('#tblTranPrty');

		if (reqtype != "edit") {
			var rowIndex = $(this).closest('td').parent()[0].sectionRowIndex;
			$('#tblTranPrty').DataTable().row(rowIndex).remove().draw(false);
		}

		btnEnable('cancel', '#tblTranPrty', 'tranPrty', '');
		$('#btnTranPrtyAdd').prop("disabled", false);
	});

	// Row action on Update button click
	$(document).on('click', 'tbody td .tpupdate', function(e) {

		var openedSelectBox = $('#tblTranPrty').find('select');
		var openedTextBox = $('#tblTranPrty').find('input');

		var result = isNullCheck(openedSelectBox, 'select');
		var txtresult = isNullCheck(openedTextBox, 'input');


		if (result.length == 0 && txtresult == 0) {
			/*	if (true) {*/
			$.each(openedSelectBox, function(j, $cell) {
				fnUpdateDataTableValue($cell, $cell.value, '#tblTranPrty');
				$(openedSelectBox[j]).closest('td').html($cell.value);
				$.each(openedTextBox, function(k, $cell) {
					fnUpdateDataTableValue($cell, $cell.value, '#tblTranPrty');
					$(openedTextBox[k]).closest('td').html($cell.value);
				})
			})

			btnEnable('update', '#tblTranPrty', 'tranPrty', '');
			$('#btnTranPrtyAdd').prop("disabled", false);
		} else {
			alert(result + " ," + txtresult + " Missing !!");
		}
	});


	// Row action on Delete button click
	$(document).on("click", "tbody td .tpdelete", function(e) {
		var rowIndex = $(this).closest('td').parent()[0].sectionRowIndex;
		$('#tblTranPrty').DataTable().row(rowIndex).remove().draw(false);
		$('#btnTranPatyAdd').prop("disabled", false);
	});

});


function saveTranPartyData() {
	var sanDta = $('#tblTranPrty').DataTable().rows().data();

	var datass = [];
	$.each(sanDta, $.proxy(function(index, item) {
		var rowda = {
			tpBlno: item.tpBlno,
			tpRole: item.tpRole,
			tpName: item.tpName,
			tpCity: item.tpCity,
			tpCountry: item.tpCountry
		};
		datass.push(rowda);

	}, this));
	$('#tranPrty').val(JSON.stringify(datass));
	$("#divTranPrty").html("");


};