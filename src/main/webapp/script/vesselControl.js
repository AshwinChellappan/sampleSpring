
function addVessel() {
	$("#divAddVessel").html("");
	var vessel_JSON = $("#vessel").val();
	var tblVessel_tag = '<table id="tblVessel"  class="cell-border hover"><thead><tr><th>S.No</th><th>Bl.No</th><th>Vessel Name</th><th>IMO Number</th><th>Edit</th><th>Delete</th></tr></thead><tbody>';
	var dataSource = [];
	if (vessel_JSON) {
		var vesselArry = $.parseJSON(vessel_JSON);

		$.each(vesselArry, function(key, value) {
			var rowda = {
				blno: value.blno,
				vesselName: value.vesselName,
				vesselIMO: value.vesselIMO
			};
			dataSource.push(rowda);
		});
	}

	tblVessel_tag = tblVessel_tag + '</tbody></table>';
	$("#divAddVessel").html(tblVessel_tag);

	$('#tblVessel').DataTable({
		dom: 'Bfrtip',
		data: dataSource,
		columns: [{
			render: function(data, type, row, meta) {
				return meta.row + meta.settings._iDisplayStart + 1;
			}
		},
		{
			data: 'blno',

		},
		{
			data: 'vesselName',
			class: 'editable text'
		},
		{
			data: 'vesselIMO',
			class: 'editable text'
		},
		{
			//edit button creation    
			render: function(data, type, row, meta) {
				return createButton('edit', row.id, meta);
			}
		},
		{
			//delete button creation    

			render: function(data, type, row, meta) {
				return createButton('delete', row.id, meta);
			}
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
	$("#tblVessel").width("100%");
	$('#btnAddVessel').prop("disabled", false);
};


$(document).ready(function() {
	// Add Vessel data into grid 

	$('#btnAddVessel').on('click', function() {
		var serl = $("#serlNo").val();
		$('#btnAddVessel').prop("disabled", true);
		$('#tblVessel').DataTable().row.add({
			blno: serl,
			vesselName: "",
			vesselIMO: ""
		}).draw(false);

		$("tbody td .edit").trigger('click', ['new']);

	});

	// Row action on Edit button click
	$(document).on('click', 'tbody td .edit', function(e, arg1) {
		if (!arg1) {
			arg1 = "edit";
		}
		fnResetControls('#tblVessel');

		var clickedRow = $($(this).closest('td')).closest('tr');
		$(clickedRow).find('td').each(function(index, item) {

			if ($(this).hasClass('editable')) {
				if ($(this).hasClass('text')) {
					var tblHdr = "";
					if (index == 2) {
						tblHdr = "vesselName";
					} else if (index == 3) {
						tblHdr = "vesselIMO";
					}
					var html = fnCreateTextBox($(this).html(), tblHdr, arg1);
					$(this).html($(html))
				}
			}
		});

		btnEnable('edit', '#tblVessel', 'vessel', clickedRow);

	});

	// Row action on Cancel button click
	$(document).on('click', 'tbody td .cancel', function(e) {

		var reqtype = "";
		var openedTextBox = $('#tblVessel').find('input');
		$.each(openedTextBox, function(k, $cell) {
			reqtype = $cell.dataset.reqtype;
		});
		fnResetControls('#tblVessel');

		if (reqtype != "edit") {
			var rowIndex = $(this).closest('td').parent()[0].sectionRowIndex;
			$('#tblVessel').DataTable().row(rowIndex).remove().draw(false);
		}

		btnEnable('cancel', '#tblVessel', 'vessel', rowIndex);
		$('#btnAddVessel').prop("disabled", false);
	});

	// Row action on Update button click
	$(document).on('click', 'tbody td .update', function(e) {

		var openedTextBox = $('#tblVessel').find('input');
		var result = isNullCheck(openedTextBox, 'input');
		console.log(result.length + ">>" + result);
		if (result.length == 0) {
			$.each(openedTextBox, function(k, $cell) {
				fnUpdateDataTableValue($cell, $cell.value, '#tblVessel');
				$(openedTextBox[k]).closest('td').html($cell.value);
			})
			btnEnable('update', '#tblVessel', 'vessel', '');
			$('#btnAddVessel').prop("disabled", false);
		} else {
			alert(result + " Missing !!");
		}

	});


	// Row action on Delete button click
	$(document).on("click", "tbody td .delete", function(e) {
		var rowIndex = $(this).closest('td').parent()[0].sectionRowIndex;
		$('#tblVessel').DataTable().row(rowIndex).remove().draw(false);
		$('#btnAddVessel').prop("disabled", false);
	});

});





function saveVesselData() {
	var sanDta = $('#tblVessel').DataTable().rows().data();

	var datass = [];
	$.each(sanDta, $.proxy(function(index, item) {
		var rowda = {
			blno: item.blno,
			vesselName: item.vesselName,
			vesselIMO: item.vesselIMO
		};
		datass.push(rowda);

	}, this));
	$('#vessel').val(JSON.stringify(datass));
	$("#divAddVessel").html("");

};